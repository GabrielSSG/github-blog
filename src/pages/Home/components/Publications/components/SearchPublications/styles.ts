import { Container } from "@/styles/container";
import styled from "styled-components";

export const SearchPublicationsContainer = styled(Container)``;

export const SearchPublicationsLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  span {
    font-size: 1.125rem;
    line-height: 160%;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  small {
    font-size: 0.875rem;
    line-height: 160%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.baseSpan};
  }
`;

export const SearchPublicationsInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 1rem 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.baseBorder};
  background: ${({ theme }) => theme.colors.baseInput};
  color: ${({ theme }) => theme.colors.baseText};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.baseLabel};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.baseText};
  }
`;
