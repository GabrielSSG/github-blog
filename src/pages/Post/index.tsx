import {
  PostCard,
  PostCardFooter,
  PostCardHeader,
  PostCardTitle,
  PostPageContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/styles/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostPage() {
  return (
    <PostPageContainer>
      <PostCard>
        <PostCardHeader>
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </Link>
          <Link href="#">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostCardHeader>
        <PostCardTitle>JavaScript data types and data structures</PostCardTitle>
        <PostCardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </PostCardFooter>
      </PostCard>
    </PostPageContainer>
  );
}
