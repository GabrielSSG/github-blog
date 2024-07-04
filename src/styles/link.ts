import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
