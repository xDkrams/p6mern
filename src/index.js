import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IncomingContextProvider } from "./Context/IncomingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IncomingContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IncomingContextProvider>
);
