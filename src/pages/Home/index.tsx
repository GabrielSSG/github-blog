import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { HomePageContainer } from "./styles";

import { useGitHubUser } from "@/hooks/use-github-user";

export function HomePage() {
  const { gitHubUser, isLoading } = useGitHubUser();

  return (
    <HomePageContainer>
      <ProfileCard user={gitHubUser} isLoading={isLoading} />
      <Publications />
    </HomePageContainer>
  );
}
