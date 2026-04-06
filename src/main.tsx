import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContext.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext.Provider>
  </StrictMode>,
);
