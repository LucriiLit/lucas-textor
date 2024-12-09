import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

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
import P5Canvas04 from "./p5_algorithms/P5Canvas04.js";
import P5Canvas05 from "./p5_algorithms/P5Canvas05.js";


function App() {
  return (
    <Router>
      <Analytics />
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
            <P5Canvas02>
                <div className="renderTESTblue"></div>
            </P5Canvas02>
            <div className="canvasDiscription">
              <p className="discriptionParagraph">[002] &mdash; <b>POLAR PIE</b></p>
              <p className="discriptionParagraph">[JAN 22]</p>
            </div>
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
            <div className="canvasDiscription">
              <p className="discriptionParagraph">[004] &mdash; <b>MODAL WAVES</b></p>
              <p className="discriptionParagraph">[OKT 23]</p>
            </div>
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
            <div className="canvasDiscription">
              <p className="discriptionParagraph">[001] &mdash; <b>VECTOR VEGGIE</b></p>
              <p className="discriptionParagraph">[JAN 22]</p>
            </div>
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas04 />
            <div className="canvasDiscription">
              <p className="discriptionParagraph">[003] &mdash; <b>MOTION MATCHA</b></p>
              <p className="discriptionParagraph">[OKT 23]</p>
            </div>
          </div>
        </div>
        <div className="canvasFrame boxShadow">
          <div className="canvasContainer">
            <P5Canvas05 />
            <div className="canvasDiscription">
              <p className="discriptionParagraph">[005] &mdash; <b>FADING PULSES</b></p>
              <p className="discriptionParagraph">[NOV 24]</p>
            </div>
          </div>
        </div>
        <div className="spaceHolder"></div>
      </div>
    </div>
  );
}

export default App;