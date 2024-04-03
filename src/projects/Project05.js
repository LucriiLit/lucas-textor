import React, { useEffect, useState, useRef } from "react";
import TCB_Logo from "../images/Logo-Techno_Campus_Berlin.png";
import Biomes_Logo from "../images/Logo-Biomes.png";
import DMG_Logo from "../images/Logo-DMG_Dental.png";
import ELBA_Logo from "../images/Logo-VPI-ELBA.png";
import FutureMinds_Logo from "../images/Logo-future_minds.png";
import HR_Logo from "../images/Logo-Holzrichter.png";
import LC_Logo from "../images/Logo-Legalcore.png";
import LS_Logo from "../images/Logo-Lokschuppen.png";
import aniBIOMES from "./anis/TV-Spot-Master.mp4";
import aniTCB1 from "./anis/TC-LogoLobby-Anima_03lt.mp4";
import aniTCB2 from "./anis/TC-LogoLobby-Anima-Weihnachtsedition_01lt.mp4";
import aniDMG from "./anis/DMG-Dummy-Ani-2023_04.mp4";
import aniFTM from "./anis/FutureMinds_SoMe-Animation_02.mp4";
import aniELBA1_2 from "./anis/SC-Elba-Animation-LogIn+Case.mp4";
import aniHolzrichter from "./anis/DEZ_Produktvideos_9x16-frauen-02.mp4";
import aniLegalCore from "./anis/Legalcore_AG-prodVideo-9x16-v03.mp4";
import aniLokschuppen from "./anis/Jeschepper-Allstars-Trailer-v04lt.mp4";
import { motion } from "framer-motion";

function Modal() {
  const [modals, setModals] = useState(Array(8).fill(false));

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
                  index === 1 ? HR_Logo :
                  index === 2 ? ELBA_Logo :
                  index === 3 ? DMG_Logo :
                  index === 4 ? FutureMinds_Logo :
                  index === 5 ? LC_Logo :
                  index === 6 ? TCB_Logo :
                  index === 7 ? LS_Logo : ''
                }
                alt="Cover of the Paperback"
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
                    index === 1 ? aniHolzrichter :
                    index === 2 ? aniELBA1_2 :
                    index === 3 ? aniDMG :
                    index === 4 ? aniFTM :
                    index === 5 ? aniLegalCore :
                    index === 6 ? aniTCB1 :
                    index === 7 ? aniLokschuppen : ''
                  }
                  autoPlay
                  loop
                  volume={1}
                  ></video>
                {index === 6 && (
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
