import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // глобальные стили (reset/Tailwind)
import "./styles/resume.css"; // твой кастомный css

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
