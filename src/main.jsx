import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import Roboto fonts for Material-UI typography accessibility
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(<App />);
