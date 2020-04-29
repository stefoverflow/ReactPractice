import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CounterWithComponent,
  CounterWithoutComponent
} from "./components/counter";

function App() {
  return (
    <div className="App">
      <CounterWithComponent />
      <CounterWithoutComponent />
    </div>
  );
}

export default App;
