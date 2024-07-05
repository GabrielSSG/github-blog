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
import { useParams } from "react-router-dom";
import { useGetPublication } from "@/hooks/use-get-publication";
import { useEffect } from "react";
import { defaultGithubUser } from "@/data";

export function PostPage() {
  const { id } = useParams();

  const { getPublication } = useGetPublication();

  useEffect(() => {
    getPublication(defaultGithubUser.name, defaultGithubUser.repo, id!);
  }, []);

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
