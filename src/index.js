import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";

ReactDom.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
