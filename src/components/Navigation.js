import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navigation() {
  const [navState, setNavState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }],
    points: ["about", "projects", "contact"],
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

  function toggleListLinks(index) {
    return "./" + navState.points[index];
  }

  return (
    <div className="navSection boxShadow">
      <div className="navContainer">
        <a href="/">
          {/* <img src="/images/logo_eluxtre_01.png" alt="eluxtre Logo" width="114px"></img> */}
          <h3>lucas textor</h3>
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
                {toggleListPoints(index)}
              </li>
            </Link>
          ))}
        </ul>

        <div className="footerContainer">
          <Link to="/">
            <p className="footerFont">privacy</p>
          </Link>
          <Link to="/">
            <p className="footerFont">legal</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
