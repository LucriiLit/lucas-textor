import React from "react";
import SC_01 from "../images/SubsControl-01.png";
import SC_04 from "../images/SubsControl-04.png";
import SC_05 from "../images/SubsControl-05.png";

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
        src={SC_01}
        alt="Teaser of App Design SubsControl"
      />
      <br></br>
      <br></br>
      <p>All digital interfaces have almost no mechanical and physical limits in their design. Software has no form - we design it.</p>
      <br></br>
      <br></br>
      <h2>The everyday life subscription manager</h2>
      <h1>SubsControl — App Design</h1>
      <p>
        Absolute subscription chaos?! SubsControl brings clarity to your finances! Franky Stryj and me had the goal of developing an application for iOS that supports designers in their day-to-day work. This could be interpreted in very different ways. We started the task with a brainstorming session and collected ideas. After thinking about three ideas a little further, we decided on one.
      </p>
      <br></br>
      <h3>The Idea</h3>
      <p>
        A subscription manager. It lists all your current and paused subscriptions. It allows you to view, change, pause or even cancel them and offers individual suggestions as to which providers are currently offering special promotions or generally cheaper rates for your status (e.g. student status). In addition, the total expenditure per month or year and the contract terms can be viewed. 
      </p>
      <div className="projects-img-container">
        <img
          className="projectsIMG"
          src={SC_04}
          alt="Flochart of App Design SubsControl"
        />
      </div>
      <h3>Flowchart and appearance</h3>
      <p>
        Once we knew which features our app should contain, we created a mood board and the first design drafts. We discussed them together and combined the best pieces. Before we started designing the screens, we conceptualized which pages the app should have, how it should be structured and what content we should display on the pages. In this way, we gradually created a clear, concise and subtle design based on Apple's Human Interface Guidelines.
      </p>
      <img
        className="IMGoutroSubsControl"
        src={SC_05}
        alt="overview for App Design SubsControl"
      />

      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project02;
