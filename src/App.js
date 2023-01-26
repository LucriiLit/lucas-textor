import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Reset.css";
import Navigation from "./components/Navigation.js";
import Sidebar from "./components/Sidebar.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

import P5Canvas01 from "./p5_algorithms/P5Canvas01.js";
import P5Canvas02 from "./p5_algorithms/P5Canvas02.js";
import P5Canvas03 from "./p5_algorithms/P5Canvas03.js";
import P5Canvas04 from "./p5_algorithms/P5Canvas04.js";
import P5Canvas05 from "./p5_algorithms/P5Canvas05.js";

import AniFunction01 from "./projects/anis/AniFunction01";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="super_Container">
          <Switch>
            <Route path="/projects">
              <AniFunction01 />
            </Route>
          </Switch>
          <div className="interface_Front">
            <Navigation />
            <div className="contentSection"></div>
            <Sidebar />
          </div>
          <div className="interface_Back">
            <div className="navSection"></div>
            <Switch>
              <Route exact path="/">
                <Gallery />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
            <div className="sideSection"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Gallery() {
  return (
    <div className="contentSection">
      <div className="contentContainer">
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas02 />
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas01 />
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas03 />
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas04 />
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas05 />
          </div>
        </div>
        <div className="spaceHolder"></div>
      </div>
    </div>
  );
}

export default App;
