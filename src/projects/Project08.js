import React from "react";
import VISCO_01 from "../images/VISCO-Live-01.png";
import VISCO_02 from "../images/VISCO-Live-02.png";
import VISCO_03 from "../images/VISCO-Live-03.png";
import VISCO_04 from "../images/VISCO-Live-04.png";
import VISCO_05 from "../images/VISCO-Live-05.png";
import VISCO_06 from "../images/VISCO-Live-06.png";
import VISCO_A from "../images/VISCO-Live-A.png";
import VISCO_B from "../images/VISCO-Live-B.png";
import VISCO_C from "../images/VISCO-Live-C.png";
import VISCO_D from "../images/VISCO-Live-D.png";
import VISCO_E from "../images/VISCO-Live-E.png";
import VISCO_F from "../images/VISCO-Live-F.png";

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
        src={VISCO_03}
        alt="Teaser of App Design SubsControl"
      />
      <br></br>
      <br></br>
      <h2>An embodiment of an Ableton plugin</h2>
      <h1>VISCO Live</h1>
      <p>
        VISCO LIVE is a project developed in the Audio Interface Design course in SoSe24. The idea was to take the most important features from the Ableton plugin Visco and convert them to a physical device.
      </p>
      <br></br>
      <h3>Product Details</h3>
      <p>
      Measurements (mm): 200x150x40
      <br></br>
      <br></br>
      VISCO LIVE takes the most popular features from the software and makes it possible to control them in a physical manner with knobs, faders and buttons. Thus, it is ideal for live performances!
      <br></br>
      <br></br>
      The device only needs Power and an incoming MIDI Signal. 
      Use the MIDI output to listen to your creations.
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </p>
      <div className="projects-img-container">
        <img 
          className="projectsIMG borderRadius"
          src={VISCO_A}
          alt="VISCO Plugin MIDI Device"
        />
        <iframe
          className="VISCO-iFrame"
          width="100%" 
          height="360vh"
          src="https://www.youtube-nocookie.com/embed/ta_ucfmTDR4?si=rqNXLeZomPITU13Ashowinfo=0&amp;rel=0;&vq=hd1080" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
      <br></br>
      <br></br>
      <h2>KEY FEATURES:</h2>
      <br></br>
      <h3>Track selection</h3>
      <p>
        The top part of the device is the track section. Here you can select one of 8 different tracks, all with different sounds on them. To make the process faster, you can also mute and play solo tracks by pressing „Mute“ or „Solo“ and simultaneously the track button.
      </p>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG borderRadius"
          src={VISCO_B}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>Working with samples</h3>
      <p>
        Under the track selection are two displays. Each of them has a button above them to access the sample library. To scroll through these samples and presets, you can use the rotary knob in the middle between the displays. When you are happy with the selection, just press the knob down to confirm. Now you can use the big fader under the displays to mix the two selected samples. The device memorizes the fader position of each track, so if you switch to a different track, it will jump to the correct position by itself.
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG borderRadius"
          src={VISCO_C}
          alt="VISCO Plugin MIDI Device"
        />
        <img
          className="projectsIMG borderRadius"
          src={VISCO_D}
          alt="VISCO Plugin MIDI Device"
        />
        <img
          className="projectsIMG borderRadius"
          src={VISCO_E}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <br></br>
      <br></br>
      <h3>Global Macros</h3>
      <p>
        At the very bottom are five more rotary encoders. These control global effects. So, e.g., if you turn the timescale up, the tempo of all tracks will increase.
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG borderRadius"
          src={VISCO_F}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>What's in the box</h3>
      <p>
        To save costs, we 3D - printed most parts of the product with matte black PLA.
        Only the lettering and some important highlights are white.
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
      <img
          className="projectsIMG borderRadius"
          src={VISCO_02}
          alt="VISCO Plugin MIDI Device"
        />
        <img
          className="projectsIMG borderRadius"
          src={VISCO_06}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>Process</h3>
      <p>
        In the research phase, as well as in the development phase, we applied the HPI Design Thinking strategies. 
      <br></br>
      <br></br>
        The product is made for people who want to take the Visco features out of their home setup and bring them to live performances. Since controlling digital knobs and faders can be very hard on a laptop, VISCO LIVE provides easy access and controllability via physical controls.
      <br></br>
      <br></br>
        To find out what Visco users really need, we had to talk to them. We interviewed many people from all over the world and also did some deep dives in online forums such as Reddit or the Visco/Ableton Discord server. More details about that are in the next photo gallery.
      <br></br>
      <br></br>
        After intensive research and interviews, it stood out that users who perform live would love to integrate Visco in their sets, but not having a way of physically controlling the effects and functions of the program makes it really hard for them.
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG borderRadius"
          src={VISCO_01}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>Werkschau</h3>
      <p>
        We are happy that we got all the important functions working to show VISCO Live on the Werkschau in Potsdam. In order to be able to try out the Midi device as a visitor, we added a manual. 
      </p>
      <br></br>
      <br></br>
      <div className="projects-img-container">
        <img
          className="projectsIMG borderRadius"
          src={VISCO_05}
          alt="VISCO Plugin MIDI Device"
        />
      </div>
      <img
        className="imgVISCO"
        src={VISCO_04}
        alt="overview for App Design SubsControl"
      />
      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project02;
