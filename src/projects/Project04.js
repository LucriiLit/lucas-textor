import React from "react";
import { motion } from "framer-motion";

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
      <h1>Visual concepts translated into the Web</h1>
      <p>
        <br></br>
        &#47;&#47; Coaching funnels for a business psychologist <br></br>
        <a
          href="https://www.light-creators.com"
          target="_blank"
          rel="noreferrer"
        >
          <u>light-creators.com</u>
          <a
            href="https://www.light-creators.com/1zu1"
            target="_blank"
            rel="noreferrer"
          >
            <u>/1zu1</u>
          </a>
        </a>
      </p>
      <br></br>
      <p>
        &#47;&#47; Website for two medical practices of cardiologists <br></br>
        <a href="https://www.kardios.de" target="_blank" rel="noreferrer">
          <u>kardios.de</u>
        </a>
      </p>
      <br></br>
      <p>
        &#47;&#47; Onepager of a business school for investors <br></br>
        <a
          href="https://www.wirtschaft-von-morgen.de"
          target="_blank"
          rel="noreferrer"
        >
          <u>wirtschaft-von-morgen.de</u>
        </a>
      </p>
      <br></br>
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project04;
