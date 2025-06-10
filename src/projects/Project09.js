import React from "react";
import TRACKS_01 from "../images/Tracks-header-05.png";
import TRACKS_02 from "../images/Tracks_poster-02.jpg";
import TRACKS_03 from "../images/Tracks_concept-02.png";
import TRACKS_04 from "../images/Tracks_tech-03.jpg";
import TRACKS_05 from "../images/Tracks_tech-01.jpg";
import TRACKS_06 from "../images/Tracks_tech-02.jpg";
import TRACKS_07 from "../images/Tracks_tech-04.jpg";
import TRACKS_08 from "../images/Tracks_tech-05.jpg";
import TRACKS_09 from "../images/Tracks_output-05.jpg";
import TRACKS_10 from "../images/Tracks_output-06.jpg";

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
        className="projectHeader_Eisfrau"
        src={TRACKS_01}
        alt="Header Teaser of the Audiovisuals"
      />
      <br></br>
      <br></br>
      <h2>An Interactive Audiovisual Experience</h2>
      <h1>AI Jukebox</h1>
      <p>
        In this project, I explored how sensor technology can be used to create dynamic environments that respond to human interaction. The goal was to design an adaptive system that reacts in real time, balancing both aesthetic appeal and functional design. The result is a “Digital Jukebox” that employs an image recognition system to identify various physical objects and, based on the input, triggers a corresponding song along with a synchronized audiovisual experience.
      </p>
      <div className="projects-img-container">
        <img 
          className="projectsIMG borderRadius IMG-Tracks02"
          src={TRACKS_02}
          alt="Track States of the Visual Poster"
        />
        <iframe
          className="VISCO-iFrame"
          width="100%" 
          height="337px"
          src="https://www.youtube.com/embed/g04TqqoTP6w?si=BU48hXoFDfYdb-TGshowinfo=0&amp;rel=0;&vq=hd1080" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>Behind the scenes</h3>
      <p>
      <br></br>
      The project centered around three physical objects—stones—as interactive triggers. When placed under a camera, each stone was recognized by an AI model and linked to a specific track. The system then sent this information to TouchDesigner to launch the corresponding song and a matching audiovisual display.      <br></br>
      <br></br>
      </p>
      <img 
        className="projectsIMG borderRadius"
        src={TRACKS_03}
        alt="Concept scribble"
      />
      <p>
      <br></br>
      <br></br>
      <h3>Technical Workflow</h3>
      <br></br>
      The setup required only a laptop, an ESP32-CAM module, and a USB-C cable. Image recognition was developed using Edge Impulse, a free cloud-based machine learning platform. I collected around 80 images per object (three different stones) from various angles using the ESP32-CAM.
      <br></br>
      <br></br>
      After labeling the images (e.g., stone-01, -02, -03), I generated feature clusters to evaluate the model's accuracy. The model was then trained with adjustable parameters like learning rate and number of training cycles. Once trained, it was deployed to the ESP32-CAM using the FOMO model optimized for object detection on microcontrollers.
      <br></br>
      <br></br>
      </p>
      <img
        className="projectsIMG borderRadius"
        src={TRACKS_04}
        alt="ESP32-Cam Modul"
      />
      <img 
        className="projectsIMG borderRadius"
        src={TRACKS_05}
        alt="Collection of images for AI-Model"
      />
      <img 
        className="projectsIMG borderRadius"
        src={TRACKS_06}
        alt="Training Data"
      />
      <p>
      <br></br>
      <br></br>
      <h3>Processing & Integration</h3>
      <br></br>
      I adapted the code from the Edge Impulse library to output a simple integer: 1, 2, or 3 based on the recognized stone, and 0 if no object was detected. This value was sent via serial to TouchDesigner, where it controlled a Switch operator to select one of four digital posters. To ensure smooth transitions, all data was routed through a single Serial DAT, avoiding multiple parallel serial reads that could cause significant delays.
      <br></br>
      <br></br>
      </p>
      <img
        className="projectsIMG borderRadius"
        src={TRACKS_07}
        alt="Arduino Serial and Switch Operator in TD"
      />
      <img
        className="projectsIMG borderRadius"
        src={TRACKS_08}
        alt="Touchdesigner Network of one Poster"
      />
      <br></br>
      <br></br>
      <br></br>
      <h3>Output</h3>
      <br></br>
      <img
        className="projectsIMG borderRadius"
        src={TRACKS_09}
        alt="Poster of the first and second Track"
      />
      <br></br>
      <img
        className="projectsIMG borderRadius"
        src={TRACKS_10}
        alt="Poster of the third and fourth Track"
      />
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project02;
