import { Container } from "@/styles/container";
import { SearchPublications } from "./components/SearchPublications";
import { PublicationListContainer } from "./styles";
import { PublicationCard } from "./components/PublicationCard";

export function Publications() {
  return (
    <Container>
      <SearchPublications />
      <PublicationListContainer>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </PublicationListContainer>
    </Container>
  );
}
