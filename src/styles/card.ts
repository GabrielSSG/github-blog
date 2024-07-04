import styled from "styled-components";

export const Card = styled.div`
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  background: ${({ theme }) => theme.colors.baseProfile};
  padding: 3rem;
`;
