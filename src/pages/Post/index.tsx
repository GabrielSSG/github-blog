import {
  PostCard,
  PostCardFooter,
  PostCardHeader,
  PostCardTitle,
  PostContent,
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
import { useGitHubUser } from "@/hooks/use-github-user";
import Markdown from "react-markdown";

export function PostPage() {
  const { id } = useParams();
  const { getPublication, publication } = useGetPublication();
  const { gitHubUser } = useGitHubUser();

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
        <PostCardTitle>{publication?.title}</PostCardTitle>
        <PostCardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {gitHubUser?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> {gitHubUser?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {gitHubUser?.followers} seguidores
          </span>
        </PostCardFooter>
      </PostCard>
      <PostContent>
        <Markdown>{publication?.body}</Markdown>
      </PostContent>
    </PostPageContainer>
  );
}
