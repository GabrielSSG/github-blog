import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import {
  LinkStyled,
  PublicationCardContainer,
  PublicationCardContent,
  PublicationCardHeader,
} from "./styles";
import { Publication } from "@/@types/publication";

interface PublicationCardProps extends Publication {}

export function PublicationCard({
  id,
  title,
  body,
  updatedAt,
}: PublicationCardProps) {
  return (
    <LinkStyled to={`/post/${id}`}>
      <PublicationCardContainer>
        <PublicationCardHeader>
          <h4>{title}</h4>
          <small>
            {formatDistanceToNow(new Date(updatedAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </small>
        </PublicationCardHeader>
        <PublicationCardContent>
          <p>{body}</p>
        </PublicationCardContent>
      </PublicationCardContainer>
    </LinkStyled>
  );
}
