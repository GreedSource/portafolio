import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { LayoutApp } from "./router";
import { theme } from "./styles";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <LayoutApp />
      </Router>
    </ThemeProvider>
  );
};
export default App;
