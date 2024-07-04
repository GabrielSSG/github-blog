import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardFooter,
  ProfileCardHeader,
} from "./styles";
import { Link } from "../../../../components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

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
          <Link href="#">Github</Link>
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
