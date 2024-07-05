import { useForm } from "react-hook-form";
import {
  SearchPublicationsContainer,
  SearchPublicationsInput,
  SearchPublicationsLabel,
} from "./styles";
import { SearchPublicationsFormData, searchPublicationsSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchPublicationsProps {
  publicationsLength: number;
  onValueChange: (value: string) => void;
}
export function SearchPublications({
  publicationsLength,
  onValueChange,
}: SearchPublicationsProps) {
  const { handleSubmit, register } = useForm<SearchPublicationsFormData>({
    resolver: zodResolver(searchPublicationsSchema),
  });

  const handleSearch = (data: SearchPublicationsFormData) => {
    onValueChange(data.query);
  };

  return (
    <SearchPublicationsContainer>
      <SearchPublicationsLabel>
        <span>Publicações</span>
        <small>
          {publicationsLength === 1
            ? `01 Publicação`
            : `${publicationsLength} Publicações`}
        </small>
      </SearchPublicationsLabel>
      <form onSubmit={handleSubmit(handleSearch)}>
        <SearchPublicationsInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </SearchPublicationsContainer>
  );
}
