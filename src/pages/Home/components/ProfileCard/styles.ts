import { Card } from "@/styles/card";
import styled from "styled-components";

export const ProfileCardContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  gap: 2rem;
 

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.baseTitle};
  }
`;

export const ProfileCardContent = styled.div`
  margin-top: 1.5rem;
  p {
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.baseText};
  }
`;

export const ProfileCardFooter = styled.div`
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
    color: ${({ theme }) => theme.colors.baseSubtitle};

    svg {
      color: ${({ theme }) => theme.colors.baseLabel};
      width: 18px;
      height: 18px;
    }
  }
`;
