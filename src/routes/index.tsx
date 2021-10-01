import { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HomeView, AboutView, ContactView } from "../views";
import { AppBar } from "../components";
import { AnimatedRoutes, RouteTransition } from "../utils/animation";

export const Routes: FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <AppBar />
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
      </AnimatedRoutes>
    </Router>
  );
};

export default Routes;
