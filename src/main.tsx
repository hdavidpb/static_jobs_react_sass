import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import JobsContext from "./context/jobs/JobsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <JobsContext>
    <App />
  </JobsContext>
);
