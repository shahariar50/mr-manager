import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blue[700], light: "#cae4f96b" },
    text: { primary: "#000" },
  },
  typography: {
    fontFamily: ["'Mulish', sans-serif"],
    body1: { fontSize: 16 },
    body2: { fontSize: 13 },
    h1: { fontSize: 40 },
    h2: { fontSize: 32 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    h5: { fontSize: 18, fontWeight: 700 },
    h6: { fontSize: 16, fontWeight: 700 },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
