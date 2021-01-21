import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App(props) {
  return (
    < div className="App" >
      <div>{props.bogus.length ? "1" : "2"}</div>
      <h1>Add New Animal</h1>
      <h2>(not rapid bunnies!!!!)</h2>
      <AnimalForm />
    </div >
  );
}

export default App;
