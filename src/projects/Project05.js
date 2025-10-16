import React, { useEffect, useState, useRef } from "react";
import TCB_Logo from "../images/Logo-Techno_Campus_Berlin.png";
import Biomes_Logo from "../images/Logo-Biomes.png";
import DMG_Logo from "../images/Logo-DMG_Dental.png";
import ELBA_Logo from "../images/Logo-VPI-ELBA.png";
import FutureMinds_Logo from "../images/Logo-future_minds.png";
import HR_Logo from "../images/Logo-Holzrichter.png";
import LC_Logo from "../images/Logo-Legalcore.png";
import LS_Logo from "../images/Logo-Lokschuppen.png";
import CZ_Logo from "../images/Logo-Coruz-Black.png";
import CZ_VA04 from "../images/Logo-Coruz-Black-VA04-BIG.png";
import aniBIOMES from "./anis/TV-Spot-Master.mp4";
import aniTCB1 from "./anis/TC-LogoLobby-Anima_03lt.mp4";
import aniTCB2 from "./anis/TC-LogoLobby-Anima-Weihnachtsedition_01lt.mp4";
import aniDMG from "./anis/DMG-Dummy-Ani-2023_05.mp4";
import aniFTM from "./anis/FutureMinds_SoMe-Animation_02.mp4";
import aniELBA1_2 from "./anis/SC-Elba-Animation-LogIn+Case.mp4";
import aniHolzrichter from "./anis/DEZ_Produktvideos_9x16-frauen-03.mp4";
import aniLegalCore from "./anis/Legalcore_AG-prodVideo-9x16-v04.mp4";
import aniLokschuppen from "./anis/Jeschepper-Allstars-Trailer-v05lt.mp4";
import aniCoruzVA02 from "./anis/Coruz-Lokschuppen-Event-Comp-VA02.mp4";
import aniCoruzVA04 from "./anis/Coruz-Lokschuppen-Event-Comp-VA04.mp4";
import aniCoruzAS from "./anis/Coruz-artist-story-v01.mp4";
import aniCoruzPoster from "./anis/Coruz-V02_RA-banner-02.png";
import aniCoruzPosterVA04 from "./anis/Coruz-V004_RA-banner-01-B.png";
import { motion } from "framer-motion";

function Modal() {
  const [modals, setModals] = useState(Array(10).fill(false));

  const toggleModal = (index) => {
    const updatedModals = [...modals];
    updatedModals[index] = !updatedModals[index];
    setModals(updatedModals);
  };

  const [isWiggling, setIsWiggling] = useState(true);

  const handleWiggleStop = () => {
    setIsWiggling(false);
  };

  const handleHover = (index) => {
    const elements = document.querySelectorAll('.gridBarMotion');
    elements.forEach((item, idx) => {
      if (idx !== index) {
        item.style.boxShadow = '0px 4px 40px 0px rgba(35,0,7,0.00)';
        item.style.transform = 'scale(0.97)';
      }
    });
  };

  const handleHoverOut = () => {
    const elements = document.querySelectorAll('.gridBarMotion');
    elements.forEach(item => {
      item.style.boxShadow = '0px 4px 40px 0px rgba(35,0,7,0.05)';
      item.style.transform = 'scale(1)';
    });
  };

  useEffect(() => {
    const logoElement = document.querySelector(".barWiggle");

    const stopAnimation = () => {
      logoElement.style.animation = "none";
    };

    logoElement.addEventListener("mouseenter", stopAnimation);

    return () => {
      logoElement.removeEventListener("mouseenter", stopAnimation);
    };
  }, []);

  
  // Lautstärke der Videos, siehe Ref
  const videoRef = useRef(null);
  
  if (videoRef.current) {
    videoRef.current.volume = 0.2;
  }


  return (
    <motion.div>
      <div className="projectContainer noHeaderMargin">
        <div className="gridContainerMotion">
          {modals.map((modal, index) => (
            <div
              key={index}
              className={`gridBarMotion cursorPointer ${isWiggling && index === 0 ? 'barWiggle' : ''}`}
              onMouseOver={() => {handleHover(index); handleWiggleStop()}}
              onMouseOut={handleHoverOut}
              onClick={() => toggleModal(index)}
            >
              <img
                className="svg-MotionLogo"
                src={
                  index === 0 ? Biomes_Logo :
                  index === 1 ? CZ_Logo :
                  index === 2 ? CZ_VA04 :
                  index === 3 ? HR_Logo :
                  index === 4 ? LS_Logo :
                  index === 5 ? ELBA_Logo :
                  index === 6 ? DMG_Logo :
                  index === 7 ? FutureMinds_Logo :
                  index === 8 ? LC_Logo :
                  index === 9 ? TCB_Logo : ''
                }
                alt="Logo of the Collective"
              />
            </div>
          ))}
        </div>
        <div className="spaceHolder"></div>
      </div>
      {modals.map((modal, index) => (
        modal && (
          <div key={index}>
            <div className="overlayContainer cursorPointer" onClick={() => toggleModal(index)}>
              <div className="videoContainer">
                <video
                  ref={videoRef}
                  className="boxShadow borderRadius"
                  src={
                    index === 0 ? aniBIOMES :
                    index === 1 ? aniCoruzVA02 :
                    index === 2 ? aniCoruzVA04 :
                    index === 3 ? aniHolzrichter :
                    index === 4 ? aniLokschuppen :
                    index === 5 ? aniELBA1_2 :
                    index === 6 ? aniDMG :
                    index === 7 ? aniFTM :
                    index === 8 ? aniLegalCore :
                    index === 9 ? aniTCB1 : ''
                  }
                  autoPlay
                  loop
                  volume={1}
                  ></video>
                {index === 1 && (
                  <img
                    className="boxShadow borderRadius"
                    src={aniCoruzPoster}
                    alt="Resident Advisor Banner"
                  ></img>
                )}
                {index === 1 && (
                  <video
                    className="boxShadow borderRadius"
                    src={aniCoruzAS}
                    autoPlay
                    loop
                    muted
                  ></video>
                )}
                {index === 2 && (
                  <img
                    className="boxShadow borderRadius"
                    src={aniCoruzPosterVA04}
                    alt="Resident Advisor Banner"
                  ></img>
                )}
                {index === 9 && (
                  <video
                    className="boxShadow borderRadius"
                    src={aniTCB2}
                    autoPlay
                    loop
                    muted
                  ></video>
                )}
              </div>
            </div>
          </div>
        )
      ))}
    </motion.div>
  );
}

function Project05() {
  return <Modal />;
}

export default Project05;
