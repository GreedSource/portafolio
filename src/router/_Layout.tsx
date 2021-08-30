import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Drawer } from "../components";

const LayoutApp: FC = (): JSX.Element => {
  return (
    <Switch>
      <Drawer>
        <Route exact path="/">
          kappa
        </Route>
      </Drawer>
    </Switch>
  );
};
export default LayoutApp;
