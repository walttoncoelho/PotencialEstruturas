import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lighTheme, darkTheme } from "../src/theme";
import GlobalStyles from "../src/styles/global";
import { Tipograf } from "./styles/styles";
import { Footer } from "../src/components/footer/Footer";
import { AppRouter } from "../src/Router";
import { MenuMobile } from "../src/components/MenuMobile";
import { NavBar } from "./components/NavBar";
import ReactGA from "react-ga4";

export function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("UA-50360202-1");
    // This just tracks a pageview
    ReactGA.send("pageview");
  }, []);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <ThemeProvider
      theme={
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? lighTheme
          : darkTheme
      }
    >
      <>
        <Tipograf>
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
          <heade>
            <NavBar setMenuIsVisible={setMenuIsVisible} />
          </heade>
          <AppRouter />
          <Footer />
        </Tipograf>
      </>
      <GlobalStyles />
    </ThemeProvider>
  );
}
