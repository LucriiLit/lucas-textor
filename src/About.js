import basicAni from "./projects/anis/smuus-bubbles_01.mp4";
import spheresComp from "./images/HI5-C05-COMP-01.png";

export default function About() {
  return (
    <div className="contentSection">
      <div className="contentContainer">
        <video className="basicAni" src={basicAni} autoPlay loop muted></video>
        <div>
          <h2>Designer raised in an artistic milieu<br></br><br></br></h2>
          <h1>
            Nothing is as constant <br></br>as change.
          </h1>
          <p>
            Bringing eye candy to motion is my hobbyhorse. I love crafting visually engaging stories that shape experiences in a dynamic and interactive way, inviting participation.
          <br></br>
          <br></br>
            Since I was little I have been observing patiently. Now my sharp eye allows me to precisely adapt, refine, and recombine bits into something new. As a designer, I value sustainability and seek to balance creativity with responsibility.
          <br></br>
          <br></br>
            I embrace the process of trial and error, knowing that growth often comes from failure and constant evolution. Sometimes I fall forward.
          </p>
          <br></br>
          <br></br>
          <img src={spheresComp} alt="Composition of Spheres" className="spheresComp" />
          <br></br>
          <br></br>
          <h3>My Background</h3>
          <p>
            <br></br>
            [2019-21] &#47;&#47; Apprenticeship as Media Designer at <br></br>
            <a
              href="https://ernst-litfass-schule.de/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Ernst-Litfass-Schule</u>
            </a>
          </p>
          <p>
            <br></br>
            [2019-23] &#47;&#47; Full Service Design at <br></br>
            <a href="https://short-cuts.de/" target="_blank" rel="noreferrer">
              <u>SHORT CUTS GmbH</u>
            </a>
          </p>
          <p>
            <br></br>
            [2021-NOW] &#47;&#47; B. A. Interface Design at <br></br>
            <a
              href="https://www.fh-potsdam.de/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Fachhochschule Potsdam UAS</u>
            </a>
          </p>
          <p>
            <br></br>
            [2023-24] &#47;&#47; Performance Design at <br></br>
            <u>EX MACHINA GmbH</u>
          </p>
          <div className="spaceHolder"></div>
        </div>
      </div>
    </div>
  );
}
