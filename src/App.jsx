import "./App.css";
import { useEffect, useReducer } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Импорт кастомной темы и данных
import theme from "./theme";
import { furniture } from "./data/furniture";

// Импорт компонентов
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import Main from "./components/Main";

function App() {
  const [status, toggle] = useReducer((prevStatus) => !prevStatus, true);

  useEffect(() => {
    console.log(`The showroom is ${status ? "open" : "closed"}.`);

    // Announce status changes to screen readers
    const announcement = `Showroom is now ${status ? "open" : "closed"}`;
    const ariaLiveRegion = document.createElement("div");
    ariaLiveRegion.setAttribute("aria-live", "polite");
    ariaLiveRegion.setAttribute("aria-atomic", "true");
    ariaLiveRegion.style.position = "absolute";
    ariaLiveRegion.style.left = "-10000px";
    ariaLiveRegion.style.width = "1px";
    ariaLiveRegion.style.height = "1px";
    ariaLiveRegion.style.overflow = "hidden";
    ariaLiveRegion.textContent = announcement;

    document.body.appendChild(ariaLiveRegion);

    // Clean up after announcement
    setTimeout(() => {
      if (document.body.contains(ariaLiveRegion)) {
        document.body.removeChild(ariaLiveRegion);
      }
    }, 1000);
  }, [status]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ minHeight: "100vh", bgcolor: "background.default" }}
        role="application"
        aria-label="Serhii's Furniture Showroom Application"
      >
        <Header name="Serhii" year={new Date().getFullYear()} />
        <StatusBar status={status} toggle={toggle} />
        <Main furniture={furniture} openStatus={status} toggle={toggle} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
