import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GitHubUserProvider } from "./providers/GuitHubUserProvider";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubUserProvider>
          <Router />
        </GitHubUserProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
