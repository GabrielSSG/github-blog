import { Container } from "@/styles/container";
import styled from "styled-components";

export const PublicationListContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
`;
