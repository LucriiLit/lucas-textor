import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navigation() {
  const [navState, setNavState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    points: ["about", "01.visual", "02.digital", "contact"],
  });

  function toggleActive(index) {
    setNavState({ ...navState, activeObject: navState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (navState.objects[index] === navState.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  }

  function toggleListPoints(index) {
    return navState.points[index];
  }

  let firstCount = 1;

  function toggleListLinks(index) {
    if (firstCount === 1 && navState.points[index] === "01.visual") {
      firstCount++;
      return "../projects/cover-collection";
    } else if (firstCount === 2 && navState.points[index] === "02.digital") {
      firstCount++;
      return "../projects/visco-live";
    } else {
      return "../" + navState.points[index];
    }
  }
  

  return (
    <div className="navSection boxShadow">
      <div className="navContainer">
        <a href="/">
          <h3 className="name">lucas textor</h3>
        </a>
        <ul className="navList">
          {navState.objects.map((elements, index) => (
            <Link to={toggleListLinks(index)}>
              <li
                key={index}
                className={toggleActiveStyles(index)}
                onClick={() => {
                  toggleActive(index);
                }}
              >
                <span className="hover-effect"></span>
                {toggleListPoints(index)}
              </li>
            </Link>
          ))}
        </ul>

        <div className="footerContainer">
          <Link to="/imprint">
            <p className="footerFont">imprint</p>
          </Link>
          <Link to="/privacy">
            <p className="footerFont">privacy</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
