import styled from "styled-components";
import cover from "../../assets/img/covers/header-cover.png";

export const PageHeaderContainer = styled.header`
  background: url(${cover}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 296px;
`;

export const PageHeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
