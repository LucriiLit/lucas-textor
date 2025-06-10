import React from "react";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Project01 from "../projects/Project01";
import Project02 from "../projects/Project02";
import Project03 from "../projects/Project03";
import Project04 from "../projects/Project04";
import Project05 from "../projects/Project05";
import Project06 from "../projects/Project06";
import Project07 from "../projects/Project07";
import Project08 from "../projects/Project08";
import Project09 from "../projects/Project09";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/projects/AI-PAPERBACK">
          <Project01 />
        </Route>
        <Route exact path="/projects/Eisfrau-Branding">
          <Project02 />
        </Route>
        <Route exact path="/projects/Cover-Collection">
          <Project03 />
        </Route>
        <Route exact path="/projects/Web-Development">
          <Project04 />
        </Route>
        <Route exact path="/projects/Motion-Design">
          <Project05 />
        </Route>
        <Route exact path="/projects/SubsControl-App">
          <Project06 />
        </Route>
        <Route exact path="/projects/Type-Design">
          <Project07 />
        </Route>
        <Route exact path="/projects/VISCO-Live">
          <Project08 />
        </Route>
        <Route exact path="/projects/AI-Jukebox">
          <Project09 />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
