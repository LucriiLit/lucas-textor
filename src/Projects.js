import React, { useState } from "react";
import Project01 from "./projects/Project01";
import Project02 from "./projects/Project02";
import Project03 from "./projects/Project03";
import Project04 from "./projects/Project04";
import Project05 from "./projects/Project05";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

function Projects() {
  const [selectorState, setSelectorState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    projectBoxes: [
      "PROJECT-COOL",
      "Fantastique",
      "One_More_Time",
      "thisnt_terestrial",
      "Numero_Dos",
    ],
  });

  function toggleActive(index) {
    setSelectorState({
      ...selectorState,
      activeObject: selectorState.objects[index],
    });
  }

  function toggleActiveStyles(index) {
    if (selectorState.objects[index] === selectorState.activeObject) {
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
            <h2>[SELECTED WORKS]</h2>
            <div className="selectorContainer">
              {selectorState.objects.map((elements, index) => (
                <Link to={toggleListPfad(index)}>
                  <div
                    key={index}
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
          <Switch>
            <Route exact path="/projects/PROJECT-COOL">
              <Project01 />
            </Route>
            <Route exact path="/projects/Fantastique">
              <Project02 />
            </Route>
            <Route exact path="/projects/One_More_Time">
              <Project03 />
            </Route>
            <Route exact path="/projects/thisnt_terestrial">
              <Project04 />
            </Route>
            <Route exact path="/projects/Numero_Dos">
              <Project05 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Projects;
