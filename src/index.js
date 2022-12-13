import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./app/store";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const override = {
  styleOverrides: {
    root: {
      background: "#17141F",
      color: "#fff",
      boxShadow: "none",
    },
  },
};
const theme = createTheme({
  components: {
    MuiCheckbox: {
      ...override,
    },
    MuiIconButton: {
      ...override,
    },
    MuiToolbar: {
      ...override,
    },
    MuiAppBar: {
      ...override,
    },
    MuiPaper: {
      ...override,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          fontSize: "22px",
          letterSpacing: "0.5px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { paddingBottom: 16 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "border: 1px solid #B0B0B0",
          borderRadius: 14,
          color: "#ffff",
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
