import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { DarkTheme } from "./theme";
import Routes from "./routes";

const App: FunctionComponent = (): JSX.Element => {
  const notes = useSelector((state) => state);
  console.log(notes);
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
