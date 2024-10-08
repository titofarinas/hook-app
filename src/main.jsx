import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { CounterApp } from "./CounterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HooksApp />
    <CounterApp />
  </StrictMode>
);
