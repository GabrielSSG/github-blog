import { Link } from "react-router-dom";
import {
  PublicationCardContainer,
  PublicationCardContent,
  PublicationCardHeader,
} from "./styles";

export function PublicationCard() {
  return (
    <Link hrefLang="pt-BR" to={"/post/15"}>
      <PublicationCardContainer>
        <PublicationCardHeader>
          <h4>JavaScript data types and data structures</h4>
          <small>Há 1 dia</small>
        </PublicationCardHeader>
        <PublicationCardContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </PublicationCardContent>
      </PublicationCardContainer>
    </Link>
  );
}
