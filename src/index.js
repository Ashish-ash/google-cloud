import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import "./style.css";
import App from "./App";

ReactDom.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
