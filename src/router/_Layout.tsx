import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Skillbars } from "../components";
import { Button, Card } from "@material-ui/core";

const LayoutApp: FC = (): JSX.Element => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Card>
            test
            <Button>label</Button>
          </Card>
        </Route>
        <Route path="/skills">
          <Skillbars />
        </Route>
      </Switch>
    </Container>
  );
};
export default LayoutApp;
