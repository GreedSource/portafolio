import { FunctionComponent } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { DarkTheme } from "./theme";
import Routes from "./routes";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
