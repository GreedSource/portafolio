import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Skillbars } from "../components";
import { Switch as MuiSwitch } from "@material-ui/core";
import { useThemeListener, ChangeThemeAction } from "../styles";

const LayoutApp: FC = (): JSX.Element => {
  const { dispatch } = useThemeListener();
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      new ChangeThemeAction(event.target.checked ? "darkTheme" : "lightTheme")
    );
  };
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Skillbars />
          <MuiSwitch onChange={handleThemeChange} />
        </Route>
      </Switch>
    </Container>
  );
};
export default LayoutApp;
