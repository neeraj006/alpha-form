import React from "react";
import "./App.scss";
import CheckboxComponent from "./components/CheckboxComponent/CheckboxComponent";
import ListComponent from "./components/ListComponent/ListComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CheckboxComponent />
        <ListComponent />
      </div>
    </div>
  );
}

export default App;
