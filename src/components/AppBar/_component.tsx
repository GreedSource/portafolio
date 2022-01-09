import { VFC } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import useAppBarServices from "./_services";

export const AppBar: VFC = (props): JSX.Element => {
  const { handleRedirect } = useAppBarServices();
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: {
          xs: "1rem",
          md: "0",
        },
      }}
    >
      <MuiAppBar position="static" elevation={1}>
        <Container>
          <Toolbar
            sx={{
              padding: {
                sm: 0,
              },
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ITI. Joel García
            </Typography>
            <Button
              sx={{
                margin: "0.5rem",
              }}
              onClick={() => handleRedirect("/")}
            >
              Home
            </Button>
            <Button
              sx={{
                margin: "0.5rem",
              }}
              onClick={() => handleRedirect("/about")}
            >
              About
            </Button>
            <Button
              sx={{
                margin: "0.5rem",
              }}
              onClick={() => handleRedirect("/contact")}
            >
              Contact
            </Button>
            <Button
              sx={{
                margin: "0.5rem",
              }}
              onClick={() => handleRedirect("/resume")}
            >
              Resume
            </Button>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </Box>
  );
};
export default AppBar;
