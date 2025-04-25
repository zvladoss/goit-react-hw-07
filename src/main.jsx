import React, { StrictMode } from "react";
import App from "./App.jsx";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
