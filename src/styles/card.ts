import styled from "styled-components";

export const Card = styled.div`
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  background: ${({ theme }) => theme.colors.baseProfile};
  padding: 3rem;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    line-height: 160%;

    svg {
      color: ${({ theme }) => theme.colors.baseLabel};
      width: 18px;
      height: 18px;
    }
  }
`;
