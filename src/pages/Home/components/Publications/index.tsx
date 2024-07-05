import { Container } from "@/styles/container";
import { SearchPublications } from "./components/SearchPublications";
import { PublicationListContainer } from "./styles";
import { PublicationCard } from "./components/PublicationCard";
import React from "react";
import { useGetPublications } from "@/hooks/use-get-publications";

export function Publications() {
  const [queryString, setQueryString] = React.useState("");
  const { publications, getPublications } = useGetPublications();

  React.useEffect(() => {
    getPublications(queryString);
  }, [getPublications, queryString]);

  return (
    <Container>
      <SearchPublications
        onValueChange={setQueryString}
        publicationsLength={publications.length}
      />
      <PublicationListContainer>
        {publications.map((publication) => (
          <PublicationCard key={publication.id} {...publication} />
        ))}
      </PublicationListContainer>
    </Container>
  );
}
