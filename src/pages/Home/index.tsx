import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { HomePageContainer } from "./styles";
import { defaultGithubUser } from "@/data";
import { useGetGithubUser } from "@/hooks/use-get-github-user";

export function HomePage() {
  const { data, isLoading } = useGetGithubUser();

  return (
    <HomePageContainer>
      <ProfileCard user={data} isLoading={isLoading} />
      <Publications
        userName={defaultGithubUser.name}
        repo={defaultGithubUser.repo}
      />
    </HomePageContainer>
  );
}
