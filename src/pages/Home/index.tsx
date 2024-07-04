import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { HomePageContainer } from "./styles";
import { GithubUser } from "@/@types/github-user";
import { defaultGithubUser } from "@/data";
import { gitHub } from "@/utils/http";

export function HomePage() {
  const [githubUser, setGithubUser] = React.useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    gitHub
      .get(`users/${defaultGithubUser.name}`)
      .then((response) => {
        setGithubUser(response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <HomePageContainer>
      <ProfileCard user={githubUser} />
      <Publications />
    </HomePageContainer>
  );
}
