import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function Digital() {
  const [selectorState, setSelectorState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }],
    projectBoxes: [
      "VISCO-Live",
      "Web-Development",
      "SubsControl-App",
    ],
  });

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
            <h2 className="selectedWorks">[SELECTED WORKS]</h2>
            <div className="selectorContainer">
              {selectorState.objects.map((elements, index) => (
                <Link to={toggleListPfad(index)}>
                  <div
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {toggleListBoxes(index)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <AnimatedRoutes></AnimatedRoutes>
        </div>
      </div>
    </Router>
  );
}

export default Digital;
