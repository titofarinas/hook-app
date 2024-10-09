import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { CounterCustomHook } from "./01-useState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterCustomHook />
  </StrictMode>
);
