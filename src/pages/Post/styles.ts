import { Card, CardFooter } from "@/styles/card";
import { Container } from "@/styles/container";
import styled from "styled-components";

export const PostPageContainer = styled(Container)``;

export const PostCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -10rem;
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostCardTitle = styled.h1`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.baseTitle};
`;

export const PostCardFooter = styled(CardFooter)`
  margin-top: 0.5rem;
  span {
    color: ${({ theme }) => theme.colors.baseSpan};
  }
`;
