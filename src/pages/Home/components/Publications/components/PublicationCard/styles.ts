import { Card } from "@/styles/card";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PublicationCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 260px;
  gap: 1.5rem;
  border: 2px solid transparent;
  padding: 2rem 3rem;
  user-select: none;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.baseLabel};
  }
`;

export const PublicationCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h4 {
    max-width: 283px;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.baseTitle};
  }

  small {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.baseSpan};
  }
`;

export const PublicationCardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  p {
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.baseText};
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
