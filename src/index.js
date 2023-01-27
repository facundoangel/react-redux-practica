import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import createAppStore from "./store/config/config";
import App from "./App";

const appStore = createAppStore();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
