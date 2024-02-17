import React from "react";
import Cover_01 from "../images/cover-ottgott_feat_selected-aera_der_atzung.jpg";
import Cover_02 from "../images/cover-ottgott_feat_underzone-8AM.jpg";
import Cover_03 from "../images/cover-ottgott-acidjungle.jpg";
import Cover_04 from "../images/cover-ottgott-aconlyid.jpg";
import Cover_05 from "../images/cover-ottgott-battery_trance.jpg";
import Cover_06 from "../images/cover-ottgott-cooldown.jpg";
import Cover_07 from "../images/cover-ottgott-GmuA.jpg";
import Cover_08 from "../images/cover-ottgott-Space_EP.jpg";
import Cover_09 from "../images/cover-ottgott-till_we_dance_again.jpg";
import Cover_10 from "../images/cover-ottgott-vynilflow.jpg";

import { motion } from "framer-motion";

function Project03() {
  return (
    <motion.div
      className="projectContainer noHeaderMarginCover positionAbsolute"
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
      <div className="container-cover">
        <a
          className="cover-01 cover-collection-img"
          href="https://soundcloud.com/selected-berlin/premiere-ottgott-ara-der-atzung"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Cover_01} alt="Cover of a Selected track" />
        </a>
        <div className="wrapper-cover">
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/underzoneco/ottgott-8am"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_02} alt="Cover of an Underzone track" />
          </a>
          <img
            className="cover-collection-img cover-05"
            src={Cover_03}
            alt="Cover of an Acid Techno track"
          />
        </div>
      </div>
      <div className="container-cover">
        <img
          className="cover-collection-img cover-03"
          src={Cover_10}
          alt="Cover of an Acid Techno track"
        />
        <img
          className="cover-collection-img cover-04"
          src={Cover_05}
          alt="Cover of trance techno track"
        />
        <img
          className="cover-collection-img cover-05"
          src={Cover_04}
          alt="Music Cover of a hardtrance track"
        />
      </div>
      <div className="container-cover">
        <a
          className="cover-collection-img cover-06"
          href="https://soundcloud.com/obscuurrecords/premiere-ottgott-gmua"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Cover_07} alt="Cover of the Paperback" />
        </a>
        <div className="wrapper-cover">
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/ott_gott/ottgott-till-we-dance-again-16-44-ptkmasterv1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_09} alt="Cover of an Techno track" />
          </a>
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/ott_gott/ottgott-cooldown-16-44-ptkmasterv1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_06} alt="Cover of an spacy trance track" />
          </a>
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/ott_gott/memory303"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_08} alt="Cover of an groove neorave track" />
          </a>
        </div>
      </div>
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project03;
