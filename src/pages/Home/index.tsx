import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { HomePageContainer } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <ProfileCard />
      <Publications />
    </HomePageContainer>
  );
}
