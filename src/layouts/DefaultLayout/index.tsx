import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { PageHeader } from "../../components/PageHeader";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <PageHeader />
      <Outlet />
    </LayoutContainer>
  );
}
