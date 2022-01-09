import { VFC } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { DarkTheme } from "./theme";
// import { useSelector } from "react-redux";
import Routes from "./routes";

const App: VFC = (props): JSX.Element => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
