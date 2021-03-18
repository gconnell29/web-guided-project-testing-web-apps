import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm errors={["this is an error"]} />
    </div>
  );
}

export default App;
