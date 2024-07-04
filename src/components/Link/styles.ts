import styled from "styled-components";

export const LinkContainer = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  height: fit-content;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }

  svg {
    margin-left: 0.5rem;
  }
`;
