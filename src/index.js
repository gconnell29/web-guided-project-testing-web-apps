import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const lang = { species: 'Species', age: 'Age', notes: 'Notes' }

ReactDOM.render(<App lang={lang} />, document.getElementById("root"));
