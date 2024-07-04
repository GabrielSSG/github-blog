import { PageHeaderContainer, PageHeaderContent } from "./styles";
import Logo from "../../assets/img/logos/logo.png";

export function PageHeader() {
  return (
    <PageHeaderContainer>
      <PageHeaderContent>
        <img src={Logo} alt="" />
      </PageHeaderContent>
    </PageHeaderContainer>
  );
}
