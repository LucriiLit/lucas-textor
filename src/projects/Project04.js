import React from "react";
import { motion } from "framer-motion";
import teaserKardios from "../images/webDev_Kardios-Mockup-03.png";
import teaserLCT from "../images/webDev_LCT-Mockup-03.png";
import teaserWVM from "../images/webDev_Wirtschaft-von-Morgen-Mockup-03.png";
import teaserBT from "../images/webDev_Brain-Toast-MockUp-03.png";


function Project04() {
  return (
    <motion.div
      className="projectContainer noHeaderMargin"
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
      <h2>#Front-end #E-Mail-marketing #SEO</h2>
      <h1>Transferring Visual Concepts to the Web</h1>
      <br></br>
      <p>
        <img src={teaserBT} alt="Screendesign of Kardios Website" className="borderRadius" />
        [2024] &#47;&#47; Website for a management consultant for knowledge and technology transfer <br></br>
        <a href="https://braintoast.de/" target="_blank" rel="noreferrer">
          <br></br>
          &#x21B3; <u>braintoast.de</u>
        </a>
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <img src={teaserLCT} alt="Screendesign of Kardios Website" className="borderRadius" />
        [2023] &#47;&#47; Coaching funnels for a business psychologist <br></br>
        <a
          href="https://www.light-creators.com"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          &#x21B3; <u>light-creators.com</u>
        </a>
        <a
          href="https://www.light-creators.com/buch"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          &#x21B3; <u>/buch</u>
        </a>
        <a
          href="https://www.light-creators.com/video-training"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          &#x21B3; <u>/video-training</u>
        </a>
      </p>      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <img src={teaserWVM} alt="Screendesign of Kardios Website" className="borderRadius" />
        [2021] &#47;&#47; Onepager of a business school for investors <br></br>
        <a
          href="https://www.wirtschaft-von-morgen.de"
          target="_blank"
          rel="noreferrer"
        >
          <br></br>
          &#x21B3; <u>wirtschaft-von-morgen.de</u>
        </a>
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <img src={teaserKardios} alt="Screendesign of Kardios Website" className="borderRadius" />
        [2021] &#47;&#47; Website for two medical practices of cardiologists <br></br>
        <a href="https://www.kardios.de" target="_blank" rel="noreferrer">
          <br></br>
          &#x21B3; <u>kardios.de</u>
        </a>
      </p>
      <br></br>
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project04;
