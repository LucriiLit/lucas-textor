import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import TCB_Logo from "../images/Logo-Techno_Campus_Berlin.png";
import Biomes_Logo from "../images/Logo-Biomes.png";
import DMG_Logo from "../images/Logo-DMG_Dental.png";
import ELBA_Logo from "../images/Logo-VPI-ELBA.png";

import FutureMinds_Logo from "../images/Logo-future_minds.png";
import aniBIOMES from "./anis/TV-Spot-Master.mp4";
import aniTCB1 from "./anis/TC-LogoLobby-Anima_03lt.mp4";
import aniTCB2 from "./anis/TC-LogoLobby-Anima-Weihnachtsedition_01lt.mp4";
import aniDMG from "./anis/DMG-Dummy-Ani-2023_04.mp4";
import aniFTM from "./anis/FutureMinds_SoMe-Animation_02.mp4";
import aniELBA1 from "./anis/SC-ELBA-Case-Animation-Final_lt.mp4";
import aniELBA2 from "./anis/SC-Elba-Animation-2-LogIn-Web-02lt.mp4";

import { motion } from "framer-motion";

function Modal() {
  const [modal1, setModal1] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  const [modal2, setModal2] = useState(false);

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const [modal3, setModal3] = useState(false);

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  const [modal4, setModal4] = useState(false);

  const toggleModal4 = () => {
    setModal4(!modal4);
  };

  const [modal5, setModal5] = useState(false);

  const toggleModal5 = () => {
    setModal5(!modal5);
  };

  //playing the wiggle in loop (CSS) and then permanently end on hover (mouseleave)
  useEffect(() => {
    const logoElement = document.querySelector(".LogoBiomes");

    function stopAnimation() {
      logoElement.style.animation = "none"; // Remove the animation
    }

    logoElement.addEventListener("mouseenter", stopAnimation);

    return () => {
      // Clean up event listeners when the component unmounts
      logoElement.removeEventListener("mouseenter", stopAnimation);
    };
  }, []);

  return (
    <motion.div
    // initial={{
    //   opacity: 0,
    //   x: "-20vw",
    //   transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
    // }}
    // animate={{
    //   opacity: 1,
    //   x: "0vw",
    //   transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
    // }}
    // exit={{
    //   opacity: 0,
    //   x: window.innerWidth,
    //   transition: { duration: 0.2, easings: "easeOut" },
    // }}
    >
      <div className="projectContainer noHeaderMargin">
        <div className="wrapperContainerMotion">
          <div className="svgWrapper">
            <img
              className="svg-MotionLogo cursorPointer LogoBiomes"
              src={Biomes_Logo}
              alt="Cover of the Paperback"
              onClick={toggleModal1}
            />
            <img
              className="svg-MotionLogo cursorPointer LogoTCB"
              src={TCB_Logo}
              alt="Cover of the Paperback"
              onClick={toggleModal2}
            />
            <img
              className="svg-MotionLogo cursorPointer LogoDMG"
              src={DMG_Logo}
              alt="Cover of the Paperback"
              onClick={toggleModal3}
            />
            <img
              className="svg-MotionLogo cursorPointer LogoFTM"
              src={FutureMinds_Logo}
              alt="Cover of the Paperback"
              onClick={toggleModal4}
            />
            <img
              className="svg-MotionLogo cursorPointer LogoELBA"
              src={ELBA_Logo}
              alt="Cover of the Paperback"
              onClick={toggleModal5}
            />
          </div>
          <div className="textMotionWrapper">
            <h2>Klick to see!</h2>
            <h1>Latest animations</h1>
          </div>
        </div>
        <div className="spaceHolder"></div>
      </div>

      {/* rendering only if model equals true */}
      {modal1 && (
        <div>
          <div
            className="overlayContainer cursorPointer"
            onClick={toggleModal1}
          >
            <div className="videoContainer">
              <video
                className="boxShadow borderRadius"
                src={aniBIOMES}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      )}

      {modal2 && (
        <div>
          <div
            className="overlayContainer cursorPointer"
            onClick={toggleModal2}
          >
            <div className="videoContainer">
              <video
                className="boxShadow borderRadius"
                src={aniTCB1}
                autoPlay
                loop
                muted
              ></video>
              <video
                className="boxShadow borderRadius"
                src={aniTCB2}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      )}

      {modal3 && (
        <div>
          <div
            className="overlayContainer cursorPointer"
            onClick={toggleModal3}
          >
            <div className="videoContainer">
              <video
                className="boxShadow borderRadius"
                src={aniDMG}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      )}

      {modal4 && (
        <div>
          <div
            className="overlayContainer cursorPointer"
            onClick={toggleModal4}
          >
            <div className="videoContainer">
              <video
                className="boxShadow borderRadius"
                src={aniFTM}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      )}

      {modal5 && (
        <div>
          <div
            className="overlayContainer cursorPointer"
            onClick={toggleModal5}
          >
            <div className="videoContainerColumn">
              <video
                className="aniELBA1"
                src={aniELBA1}
                autoPlay
                loop
                muted
              ></video>
              <video
                className="aniELBA2"
                src={aniELBA2}
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Project05() {
  return <Modal></Modal>;
}

export default Project05;
