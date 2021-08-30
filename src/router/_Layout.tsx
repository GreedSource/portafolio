import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Skillbars } from "../components";

const LayoutApp: FC = (): JSX.Element => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Skillbars />
        </Route>
      </Switch>
    </Container>
  );
};
export default LayoutApp;
