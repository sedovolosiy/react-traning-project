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
  }, [status]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Header name="Serhii" year={new Date().getFullYear()} />
        <StatusBar status={status} toggle={toggle} />
        <Main furniture={furniture} openStatus={status} toggle={toggle} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
