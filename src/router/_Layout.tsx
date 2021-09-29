import { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Skillbars } from "../components";
import { AppContainer as Container } from "@greedsource/utils";
import { Button, Card } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";

const LayoutApp: FC = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Card>
            <Tabs onChange={handleChange} value={value}>
              <Tab label="Home" />
              <Tab label="About" />
            </Tabs>
            <Button color="primary">label</Button>
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
