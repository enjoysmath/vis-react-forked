import React from "react";
import ReactDOM from "react-dom";
import VisReact from "./visreact";

import "./styles.css";

function App() {
  return (
    <div className="vis-react">
      <VisReact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
