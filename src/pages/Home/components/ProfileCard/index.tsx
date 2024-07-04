import {
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

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img
        src="https://avatars.githubusercontent.com/u/89484314?v=4"
        alt="profile-picture"
      />
      <div>
        <ProfileCardHeader>
          <h1>Cameron Williamson</h1>
          <Link href="#">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileCardHeader>
        <ProfileCardContent>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileCardContent>
        <ProfileCardFooter>
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
        </ProfileCardFooter>
      </div>
    </ProfileCardContainer>
  );
}
