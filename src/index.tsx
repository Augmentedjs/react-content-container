import React from "react";
import ReactDOM from "react-dom/client";

/* fonts */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* manual styles */
import "./styles/main.scss";

import MainView from "./views/mainView";

const root = ReactDOM.createRoot(document.getElementById("main") as HTMLElement);
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);
