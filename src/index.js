/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

// import React from "react";
// import { render } from "react-dom";

// import App from "./App";

// render(<App></App>, document.getElementById("app"));

//reactdom update

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
