import { GitHubUser } from "@/@types/github-user";
import { GitHubUserContext } from "@/contexts/github-user.context";
import { defaultGithubUser } from "@/data";
import { gitHub } from "@/libs/github-api";
import React from "react";

interface GitHubUserProviderProps {
  children: React.ReactNode;
}

export function GitHubUserProvider({ children }: GitHubUserProviderProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [gitHubUser, setGitHubUser] = React.useState<GitHubUser>();

  const getGitHubUser = React.useCallback(async () => {
    setIsLoading(true);
    gitHub
      .get<GitHubUser>(`users/${defaultGithubUser.name}`)
      .then((response) => {
        setGitHubUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    getGitHubUser();
  }, []);

  return (
    <GitHubUserContext.Provider value={{ gitHubUser, isLoading }}>
      {children}
    </GitHubUserContext.Provider>
  );
}
