import {
  SearchPublicationsContainer,
  SearchPublicationsInput,
  SearchPublicationsLabel,
} from "./styles";

export function SearchPublications() {
  return (
    <SearchPublicationsContainer>
      <SearchPublicationsLabel>
        <span>Publicações</span>
        <small>6 Publicações</small>
      </SearchPublicationsLabel>
      <SearchPublicationsInput type="text" placeholder="Buscar conteúdo" />
    </SearchPublicationsContainer>
  );
}
