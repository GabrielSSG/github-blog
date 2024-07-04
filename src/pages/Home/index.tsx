import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { HomePageContainer } from "./styles";
import { GithubUser } from "@/@types/github-user";
import { defaultGithubUser } from "@/data";

export function HomePage() {
  const [githubUser, setGithubUser] = React.useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const getGithubUser = React.useCallback(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${defaultGithubUser.name}`)
      .then((response) => response.json())
      .then((data: GithubUser) => {
        setGithubUser(data);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    getGithubUser();
  }, []);

  return (
    <HomePageContainer>
      <ProfileCard user={githubUser} />
      <Publications />
    </HomePageContainer>
  );
}
