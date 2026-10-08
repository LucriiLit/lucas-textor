import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { SocialList } from "./Sidebar.js";

// Must match the mobile/tablet breakpoint in App.css
const MOBILE_QUERY = "(max-width: 1080px)";

function Navigation() {
  const [navState, setNavState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    points: ["about", "01.visual", "02.digital", "contact"],
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock background scrolling while the mobile overlay is open
  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", isMenuOpen);
    return () => document.documentElement.classList.remove("nav-open");
  }, [isMenuOpen]);

  // Close on Escape and when the viewport grows back to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const handleKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    const handleChange = (e) => !e.matches && setIsMenuOpen(false);
    window.addEventListener("keydown", handleKey);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

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
    <>
      <div className="mobileHeader">
        <a href="/">
          <h3 className="name">lucas textor</h3>
        </a>
        <button
          type="button"
          className={`menuToggle ${isMenuOpen ? "menuToggle--open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mainNavigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="menuToggleLine menuToggleLine--top"></span>
          <span className="menuToggleLine menuToggleLine--bottom"></span>
        </button>
      </div>
      <nav
        id="mainNavigation"
        className={`navSection boxShadow ${isMenuOpen ? "navSection--open" : ""}`}
      >
        <div className="navContainer">
          <a href="/" className="navName">
            <h3 className="name">lucas textor</h3>
          </a>
          <ul className="navList">
            {navState.objects.map((elements, index) => (
              <Link key={index} to={toggleListLinks(index)} onClick={closeMenu}>
                <li
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
            <SocialList className="navSocialList" />
            <Link to="/imprint" onClick={closeMenu}>
              <p className="footerFont">imprint</p>
            </Link>
            <Link to="/privacy" onClick={closeMenu}>
              <p className="footerFont">privacy</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
