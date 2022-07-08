import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is{" "}
          <a
            href="https://github.com/hacker-baby/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          and built by Tais Elize.
        </footer>
      </div>
    </div>
  );
}
