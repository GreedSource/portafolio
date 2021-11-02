import { FunctionComponent } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import useAppBarServices from "./_services";

export const AppBar: FunctionComponent = (): JSX.Element => {
  const { handleRedirect } = useAppBarServices();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ITI. Joel García
          </Typography>
          <Button onClick={() => handleRedirect("/")}>Home</Button>
          <Button onClick={() => handleRedirect("/about")}>About</Button>
          <Button onClick={() => handleRedirect("/contact")}>Contact</Button>
          <Button onClick={() => handleRedirect("/resume")}>Resume</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
export default AppBar;
