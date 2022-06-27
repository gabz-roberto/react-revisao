import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./views/App";

const container = document.querySelector("#root");

const root = ReactDOM.createRoot(container);

root.render(<App />);
