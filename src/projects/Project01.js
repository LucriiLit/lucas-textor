import React from "react";
// import Spline from "@splinetool/react-spline";
import aiAnimaHeader from "./anis/AI-Paperback-LT-Header_Anima.mp4";
import paperbackIMG_01 from "../images/AI_Paperback-cover.jpg";
import paperbackIMG_02 from "../images/AI_Paperback-TikTok.jpg";
import paperbackIMG_03 from "../images/AI_Paperback-optimize.jpg";
import paperbackIMG_04 from "../images/AI_Paperback-conversion.jpg";
import paperbackIMG_05 from "../images/AI_Paperback-ethics.jpg";
import paperbackIMG_06 from "../images/AI_Paperback-face-challanges.jpg";
import paperbackIMG_07 from "../images/AI_Paperback-transparency.jpg";

function Project01() {
  return (
    <div className="projectContainer marginTopAI">
      <div className="projectSplineContainer">
        {/* <SplineComp /> */}
        <video
          className="AI-Anima"
          src={aiAnimaHeader}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="spaceHolder"></div>
      <h2>AI begins to realise its potential - 2021</h2>
      <h1>THE PAPERBACK OF AI‘s</h1>
      <p>
        This guide offers a concentrated resource on the nature of artificial
        intelligence in illustrated paperback style. By contextualising AI in
        our world today, this guide provides critical and nuanced food for
        thoughts that will hopefully set you on an exciting discourse.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="paperbackIMG boxShadow"
        src={paperbackIMG_01}
        alt="Cover of the Paperback"
      />
      <br></br>
      <br></br>
      <br></br>
      {/* <div className="justifyCenter">
        <h2>Interested in </h2>
        <h1>printed version?</h1>
        <a href="mailto:hey@eluxtre.de">
          <div className="paperbackButton">
            <div className="paperbackButtonBorder">ORDER NOW</div>
          </div>
        </a>
      </div> */}
      <br></br>
      <br></br>
      <br></br>
      <h3>TRAPPED IN A BUBBLE</h3>
      <p>
        In today‘s digital era, power often lies with those who possess AI.
        These AI systems are able to process huge pools of data and exercise
        control over what we perceive and what information is withheld from us.
        That effects our behavior and thinking. Manipulation, in particular,
        plays a crucial role here.
        <br></br> <br></br>
        Take search engines like Google, for example. They use complex
        algorithms to provide search results. These algorithms do not know our
        individual truth and can easily tend to lead us into a subjective,
        self-validating information bubble. This means that they present results
        based on our previous searches and preferences, which can lead to us
        being trapped in a limited view.
        <br></br> <br></br>
        Other example are Instagram, YouTube or TikTok. Social Media platforms
        based on recommendations and personalised content. Here, AI can also
        contribute users staying in their own bubble, by recommending posts that
        are similar to the content we already consume.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="paperbackIMG"
        src={paperbackIMG_02}
        alt="Cover of the Paperback"
      />
      <img
        className="paperbackIMG"
        src={paperbackIMG_03}
        alt="Cover of the Paperback"
      />
      <img
        className="paperbackIMG"
        src={paperbackIMG_04}
        alt="Cover of the Paperback"
      />
      <br></br>
      <br></br>
      <br></br>
      <h3>INTELLIGENCE WITHOUT ETHICS IS NO INTELLIGENCE</h3>
      <p>
        The problem of pre-programmed discrimination in AI systems is a pressing
        issue that sheds light on the intersection between technology and social
        prejudice. People who develop these AI systems tend to embed their
        unconscious biases into the algorithms they create. This leads to an
        original bias of AI towards the perspectives and needs of white users,
        as the developers often belong to this group themselves and the
        optimisation of the systems is done in this direction.
        <br></br>
        <br></br>A key aspect of this problem is that AI systems tend to learn
        racism and sexism depending on the data they are trained with. If the
        data they use has a bias or reflects prejudice, these biases become
        embedded in the algorithms. This has far-reaching effects and can have a
        negative impact on certain groups, such as disabled people or black
        people.
        <br></br>
        <br></br>
        Given this issue, it is clear that the integration of ethics into the
        development and application of AI is crucial. Intelligence without
        ethics is not true intelligence. It is necessary to make conscious
        efforts to ensure that AI systems are not only technologically advanced,
        but also act in a socially just and ethically responsible manner to
        prevent discrimination and injustice.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <img
        className="paperbackIMG"
        src={paperbackIMG_05}
        alt="Cover of the Paperback"
      />
      <img
        className="paperbackIMG"
        src={paperbackIMG_06}
        alt="Cover of the Paperback"
      />
      <img
        className="paperbackIMG"
        src={paperbackIMG_07}
        alt="Cover of the Paperback"
      />
      <div className="spaceHolder"></div>
      {/* <div className="justifyCenter">
        <h2>Order the full Paperback here</h2>
        <h1>Hooked?</h1>
        <a href="mailto:hey@eluxtre.de">
          <div className="paperbackButton">
            <div className="paperbackButtonBorder">ORDER NOW</div>
          </div>
        </a>
      </div> */}
      <div className="spaceHolder"></div>
    </div>
  );
}

// function SplineComp() {
//   return (
//     <Spline
//       className="componentSpline"
//       scene="https://prod.spline.design/WhrTG84ywKKzz1jG/scene.splinecode"
//     />
//   );
// }

export default Project01;
