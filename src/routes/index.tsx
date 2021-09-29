import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen, AboutScreen, ContactScreen } from "../screen";

export const Routes: FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
