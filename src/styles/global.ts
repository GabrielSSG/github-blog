import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    color: ${({ theme }) => theme.colors.baseText};
    background: ${({ theme }) => theme.colors.baseBackground};
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}`;
