import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm lang={props.lang} />
    </div>
  );
}

export default App;
