import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./App";
import './index.css'

ReactDOM.render(
  <HelloWorld firstName="Chris" lang="TypeScript" />,
  document.getElementById("content")
);
