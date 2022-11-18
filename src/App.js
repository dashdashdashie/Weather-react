import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
      This app was coded by Daria Stephenson and is <a href="https://github.com/dashdashdashie/weather-react" target="_blank" rel="noreferrer">open-sourced on Github</a> and hosted on Netlify
      </footer>
    </div>
    </div>
  );
}


