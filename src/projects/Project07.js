import React from "react";
import AK_01 from "../images/Font-Abendkasse-01.png";
import AK_02 from "../images/Font-Abendkasse-02.png";
import AK_03 from "../images/Font-Abendkasse-03.png";
import AK_04 from "../images/Font-Abendkasse-04.png";

import { motion } from "framer-motion";

function Project02() {
  return (
    <motion.div
      className="projectContainer marginTopEis"
      initial={{
        opacity: 0,
        x: "-20vw",
        transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
      }}
      animate={{
        opacity: 1,
        x: "0vw",
        transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.2, easings: "easeOut" },
      }}
    >
      <img
        className="projectHeader_Abendkasse"
        src={AK_02}
        alt="Teaser of Abendkasse Type"
      />
      <img
        className="imgAbendkasse"
        src={AK_03}
        alt="Letter A of Abendkasse Type"
      />
      <h2>Development of a custom font</h2>
      <h1>Abendkasse – Type Design</h1>
      <p>
        Typography is a mainstay of communication in design. 
      </p>
      <br></br>
      <h3>Font theory</h3>
      <p>
        This is not about the design and layout of fonts through, for example, font hierarchies, font contrasts, reading direction, etc., but about the creation of type. The inventor of sans serif Calibri, Luc de Groot, taught us to understand the adjusting screws at a more detailed level. Ligatures, serifs, ink traps, diaeresis, metrics, oblique, kerning, descenders and ascenders, etc. I spent days recognizing the various effects of the subtlest differences in the vectors of the letters. Vertical bars appear narrower. How to achieve smooth curves. Excess at peaks and curves …
      </p>
      <div className="projects-img-container">
        <img
          className="projectsIMG"
          src={AK_01}
          alt="Letters of Abendkasse Type"
        />
      </div>
      <h3>The Process</h3>
      <p>
      I worked on a font that was based on the style of 2000s tribal tattoos. My aim was to make it suitable for covers of the Berlin club scene and to reduce it so that it could produce legible continuous text. Initially, the letters were very chaotic and lacked a consistent dynamic. Then I used Times New Roman as a foundation. This took the font to the next evolutionary stage. Consistent rhythm, conventional contrasts, harmonious serifs and yet a tendency towards wild movement. The font is still under construction. I think that the project will be with me for a while until I have added capitals and special characters and developed a variable font from different weights.
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG"
          src={AK_04}
          alt="Letters of Abendkasse Type"
        />
      </div>
      <img
        className="IMGoutroSubsControl"
        src={AK_02}
        alt="Outro of Abendkasse Type"
      />
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project02;
