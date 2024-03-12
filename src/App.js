import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./Reset.css";
import Navigation from "./components/Navigation.js";
import Sidebar from "./components/Sidebar.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Imprint from "./Imprint.js";
import Privacy from "./Privacy.js";

import P5Canvas01 from "./p5_algorithms/P5Canvas01.js";
import P5Canvas02 from "./p5_algorithms/P5Canvas02.js";
import P5Canvas03 from "./p5_algorithms/P5Canvas03.js";
// import P5Canvas04 from "./p5_algorithms/P5Canvas04.js";
// import P5Canvas05 from "./p5_algorithms/P5Canvas05.js";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="comingSoonWrapper">
          <h2>mobile coming</h2>
          <h1>Soon</h1>
          <h3 className="discoverOnDesktop">[discover on desktop]</h3>
        </div>
        <div className="super_Container">
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
              <Route path="/projects/AI-PAPERBACK">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/imprint">
                <Imprint />
              </Route>
              <Route path="/privacy">
                <Privacy />
              </Route>
            </Switch>
            <div className="sideSection_Back"></div>
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
            {/* <h2>in progress</h2>
            <a
              href="https://editor.p5js.org/luc.textor/full/qa_krqVuY"
              target="_blank"
              rel="noreferrer"
            >
              <h3>see preview &#8811;</h3>
            </a> */}
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas03 />
            {/* <h2>in progress</h2>
            <a
              href="https://editor.p5js.org/luc.textor/full/XzRPB7-ZJ"
              target="_blank"
              rel="noreferrer"
            >
              <h3>see preview &#8811;</h3>
            </a> */}
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas01 />
            {/* <h2>in progress</h2>
            <a
              href="https://editor.p5js.org/luc.textor/full/Qyx9l5Ckf"
              target="_blank"
              rel="noreferrer"
            >
              <h3>see preview &#8811;</h3>
            </a> */}
          </div>
        </div>
        {/* <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas04 />
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas05 />
          </div>
        </div> */}
        <div className="spaceHolder"></div>
      </div>
    </div>
  );
}

export default App;
