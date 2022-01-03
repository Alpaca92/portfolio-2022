import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/styles/themes";
import GlobalStyle from "./assets/styles/global";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkState } from "./atoms";

function App() {
  const isDark = /* get localStorage code || */ useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
