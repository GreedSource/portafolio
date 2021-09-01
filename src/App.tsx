import { FC, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { LayoutApp } from "./router";
import {
  ThemeContext,
  initialState,
  themeReducer,
  getThemeByName,
} from "./styles";

const App: FC = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext state={state} dispatch={dispatch}>
      <ThemeProvider theme={getThemeByName(state.theme)}>
        <Router>
          <LayoutApp />
        </Router>
      </ThemeProvider>
    </ThemeContext>
  );
};
export default App;
