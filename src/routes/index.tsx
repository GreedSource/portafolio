import { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HomeView, AboutView, ContactView, ResumeView } from "src/views";
import { AppBar } from "src/components";
import { AnimatedRoutes, RouteTransition } from "src/utils/animation";
import { Container, Box } from "@mui/material";

export const Routes: FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <AppBar />
      <Box
        sx={{
          m: "1rem",
        }}
      >
        <Container>
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition exact path="/" slideUp={30}>
              <HomeView />
            </RouteTransition>
            <RouteTransition path="/about" slideUp={30}>
              <AboutView />
            </RouteTransition>
            <RouteTransition path="/contact" slideUp={30}>
              <ContactView />
            </RouteTransition>
            <RouteTransition path="/resume" slideUp={30}>
              <ResumeView />
            </RouteTransition>
          </AnimatedRoutes>
        </Container>
      </Box>
    </Router>
  );
};

export default Routes;
