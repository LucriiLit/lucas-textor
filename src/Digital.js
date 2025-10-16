import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function Digital() {
  const [selectorState, setSelectorState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    projectBoxes: [
      "VISCO-Live",
      "Web-Development",
      "SubsControl-App",
      "AI-Jukebox",
    ],
  });

  // ✅ new: menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function toggleActive(index) {
    setSelectorState({
      ...selectorState,
      activeObject: selectorState.objects[index],
    });
  }

  function toggleActiveStyles(index) {
    if (selectorState.activeObject === null && index === 0) {
      return "activeBox";
    } else if (selectorState.objects[index] === selectorState.activeObject) {
      return "activeBox";
    } else {
      return "inactiveBox";
    }
  }

  function toggleListBoxes(index) {
    return selectorState.projectBoxes[index];
  }

  function toggleListPfad(index) {
    return "/projects/" + selectorState.projectBoxes[index];
  }

  return (
    <Router>
      <div className="contentSection">
        <div className="contentContainer">
          <div className="selectorWrapper">
            <div className="flex">
              <h2 className="selectedWorks">[SELECTED WORKS]</h2>
              {/* ✅ toggle button */}
              <div
                className="closeButtonProNav"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <p className="close">{isMenuOpen ? "CLOSE" : "SHOW"}</p>
              </div>
            </div>

            {/* ✅ apply menu-open when active */}
            <div className={`selectorContainer ${isMenuOpen ? "menu-open" : ""}`}>
              {selectorState.objects.map((elements, index) => (
                <Link key={index} to={toggleListPfad(index)}>
                  <div
                    className={toggleActiveStyles(index)}
                    onClick={() => toggleActive(index)}
                  >
                    {toggleListBoxes(index)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default Digital;
