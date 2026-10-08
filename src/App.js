import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import "./App.css";
import "./Reset.css";
import Navigation from "./components/Navigation.js";
import Sidebar from "./components/Sidebar.js";
import About from "./About.js";
import Visual from "./Visual.js";
import Digital from "./Digital.js";
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
              <Route path="/projects/cover-collection">
                <Visual />
              </Route>
              <Route path="/projects/visco-live">
                <Digital />
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

// Order of the artworks in the endless gallery
const GALLERY_ITEMS = [
  // preview: https://editor.p5js.org/luc.textor/full/qa_krqVuY
  { Canvas: P5Canvas04, number: "002", title: "POLAR PIE", date: "JAN 22" },
  // preview: https://editor.p5js.org/luc.textor/full/XzRPB7-ZJ
  { Canvas: P5Canvas03, number: "004", title: "MODAL WAVES", date: "OKT 23" },
  { Canvas: P5Canvas05, number: "001", title: "VECTOR VEGGIE", date: "JAN 22" },
  { Canvas: P5Canvas02, number: "003", title: "MOTION MATCHA", date: "OKT 23" },
  { Canvas: P5Canvas01, number: "005", title: "FADING PULSES", date: "NOV 24" },
];

function getScroller() {
  return document.querySelector(".super_Container");
}

// Only frames near the viewport run their p5 sketch, so the endless list stays fast
function GalleryFrame({ item }) {
  const frameRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const { Canvas } = item;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { root: getScroller(), rootMargin: "150% 0px" }
    );
    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="canvasFrame boxShadow" ref={frameRef}>
      <div className="canvasContainer">
        {isNearViewport && <Canvas />}
        <div className="canvasDiscription">
          <p className="discriptionParagraph">[{item.number}] &mdash; <b>{item.title}</b></p>
          <p className="discriptionParagraph">[{item.date}]</p>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [rounds, setRounds] = useState(2);
  const sentinelRef = useRef(null);

  // Append another round of artworks whenever the end of the list comes close
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setRounds((r) => r + 1),
      { root: getScroller(), rootMargin: "0px 0px 1500px 0px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [rounds]);

  return (
    <div className="contentSection">
      <div className="contentContainer">
        {Array.from({ length: rounds }, (_, round) =>
          GALLERY_ITEMS.map((item, index) => (
            <GalleryFrame key={`${round}-${index}`} item={item} />
          ))
        )}
        <div ref={sentinelRef}></div>
        <div className="spaceHolder"></div>
      </div>
    </div>
  );
}

export default App;