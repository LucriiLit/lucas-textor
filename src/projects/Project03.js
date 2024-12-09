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
import Cover_11 from "../images/cover-ottgott-timeEP.jpg";
import Cover_12 from "../images/cover-ottgott-unique_bubble.jpg";
import Cover_13 from "../images/cover-ottgott-fish_tank.jpg";
import Cover_14 from "../images/cover-ottgott-snow_drop.jpg";
import Cover_15 from "../images/cover-ottgott-mechanicsEP.jpg";
import Cover_16 from "../images/cover-ottgott-altitudo.jpg";
import Cover_17 from "../images/cover-ottgott-miracleEP.jpg";
import Cover_18 from "../images/cover-nio-initium.jpg";

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
            className="cover-collection-img cover-06 self-end"
            href="https://soundcloud.com/niooo1/nio-initium"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_18} alt="Cover of a track from Niø" />
          </a>
        <div className="wrapper-cover">
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/ott_gott/sets/mechanic"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_15} alt="Cover of the Mechanics EP" />
          </a>
          <a
            className="cover-collection-img cover-05"
            href="https://soundcloud.com/ott_gott/altitudo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_16} alt="Cover of an Track from OTG" />
          </a>
        </div>
      </div>
      <div className="container-cover">
        <a
          className="cover-collection-img cover-07"
          href="https://soundcloud.com/ott_gott/sets/miracle-ep"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Cover_17} alt="Cover of the hypnotic Miracle-EP" />
        </a>
      </div>

      <div className="container-cover">
          <a
            className="cover-collection-img cover-06 self-end"
            href="https://soundcloud.com/selected-berlin/premiere-ottgott-ara-der-atzung"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_01} alt="Cover of a Selected track" />
          </a>
        <div className="wrapper-cover">
          <a
            className="cover-collection-img cover-02"
            href="https://soundcloud.com/ott_gott/ottgott-unique-bubble"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_12} alt="Cover of an Underzone track" />
          </a>
          <img
            className="cover-collection-img cover-05"
            src={Cover_03}
            alt="Cover of an Acid Techno track"
          />
        </div>
      </div>
      <div className="container-cover">
        <a
          className="cover-collection-img cover-03 self-end"
          href="https://soundcloud.com/ott_gott/ottgott-cooldown-16-44-ptkmasterv1"
          target="_blank"
          rel="noreferrer"
        >
         <img src={Cover_06} alt="Cover of a groove neorave track" />
        </a>
        <img
          className="cover-collection-img cover-04"
          src={Cover_05}
          alt="Cover of trance techno track"
        />
        <div className="wrapper-cover">
          <img
            className="cover-collection-img cover-05"
            src={Cover_04}
            alt="Music Cover of a hardtrance track"
          />
          <a
            className="cover-collection-img cover-05"
            href="https://soundcloud.com/ott_gott/ottgott-fish-tank-1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_13} alt="Music Cover of a hardgroove track" />
          </a>
        </div>
      </div>
      <div className="container-cover container-cover-margin-top">
        <div className="wrapper-cover">
          <a
            className="cover-collection-img cover-01"
            href="https://soundcloud.com/obscuurrecords/premiere-ottgott-gmua"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_07} alt="Cover of a Vynil with the DB-Chair pattern" />
          </a>
        </div>
        <div className="wrapper-cover-2">
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
            href="https://soundcloud.com/ott_gott/memory303"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Cover_08} alt="Cover of an spacy trance track" />
          </a>
        </div>
      </div>
      <div className="container-cover">
        <img           
          className="cover-collection-img cover-03 self-start"
          src={Cover_10} 
          alt="Cover of a White Vynil track" />
        <a
          className="cover-collection-img cover-04"
          href="https://soundcloud.com/ott_gott/ottgott-x-djorn-snowdrop"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Cover_14} alt="Cover of a deep techno song"/>
        </a>
      </div>
      <div className="container-cover">
        <a
          className="cover-collection-img cover-07"
          href="https://soundcloud.com/ott_gott/sets/time-ep"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Cover_11} alt="Cover of the hardgroove Time-EP" />
        </a>
      </div>
      <div className="container-cover">
        <a
            className="cover-collection-img cover-08"
            href="https://soundcloud.com/underzoneco/ottgott-8am"
            target="_blank"
            rel="noreferrer"
        >
          <img src={Cover_02} alt="Cover of an Acid Techno track" />
        </a>
      </div>
      
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project03;
