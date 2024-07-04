import {
  ProfileCardBio,
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardFooter,
  ProfileCardHeader,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/styles/link";
import { GithubUser } from "@/@types/github-user";

interface ProfileCardProps {
  user: GithubUser | null;
}
export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <img src={user?.avatar_url} alt="profile-picture" />
      <ProfileCardContent>
        <ProfileCardHeader>
          <h1>{user?.name}</h1>
          <Link href={user?.html_url}>
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileCardHeader>
        <ProfileCardBio>
          <p>{user?.bio}</p>
        </ProfileCardBio>
        <ProfileCardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> {user?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </span>
        </ProfileCardFooter>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}
