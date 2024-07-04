import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export function Link({ children, ...props }: LinkProps) {
  return (
    <LinkContainer {...props}>
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  );
}
