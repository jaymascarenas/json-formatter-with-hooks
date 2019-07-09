import React, { useState } from "react";
import ReactDOM from "react-dom";
import JSONPretty from "react-json-pretty";
import Button from "./components/button";
import ClickToSelect from "@mapbox/react-click-to-select";

import "./styles.scss";

const App = () => {
  const [textValue, setTextValue] = useState("");

  const handleTextValue = e => {
    setTextValue(e.target.value);
  };

  const resetTextArea = () => {
    setTextValue("");
  };

  return (
    <div className="App">
      <h1>JSON Code Formatter</h1>
      <h2>Enter your JSON below to be formatted</h2>
      <textarea value={textValue} onChange={handleTextValue} />
      <Button buttonName="Reset" buttonAction={resetTextArea} />
      <p style={{ textAlign: "left" }}>{textValue ? "Click to Highlight" : ""}</p>
      <ClickToSelect>
        <JSONPretty
          id="json-pretty"
          data={textValue}
          style={{ textAlign: "left" }}
        />
      </ClickToSelect>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
