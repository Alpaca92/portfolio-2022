import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/styles/themes";
import GlobalStyle from "./assets/styles/global";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkState } from "./atoms";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
