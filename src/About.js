import basicAni from "./projects/anis/smuus-bubbles_01.mp4";

export default function About() {
  return (
    <div className="contentSection">
      <div className="contentContainer">
        <video className="basicAni" src={basicAni} autoPlay loop muted></video>
        <div>
          <h2>Digital Artist // Developer</h2>
          <h1>
            Nothing is as constant <br></br>as change.
          </h1>
          <p>
            By merging graphic skills with persuasive animation, I appreciate to
            create visually captivating stories of various themes in a dynamic
            and interactive manner. In these I try to resonate with the agility
            of modern work.
          </p>
          <br></br>
          <p>
            Nothing is as constant as change. I love to explore and discover new
            things. When I start new projects, I aspire to combine our strengths
            and work in a mutual interdependence to experiment, fail, iterate
            and optimize.
          </p>
          <br></br>
          <p>
            As a creator, I strive to integrate sustainability into my work,
            harnessing the powerful synergy between creativity and
            responsibility.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <h3>My Background</h3>
          <p>
            <br></br>
            &#47;&#47; Apprenticeship as Media Designer at <br></br>
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
            &#47;&#47; Junior Designer at <br></br>
            <a href="https://short-cuts.de/" target="_blank" rel="noreferrer">
              <u>SHORT CUTS GmbH</u>
            </a>
          </p>
          <p>
            <br></br>
            &#47;&#47; Study Interface Design at <br></br>
            <a
              href="https://www.fh-potsdam.de/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Fachhochschule Potsdam UAS</u>
            </a>
          </p>
          <div className="spaceHolder"></div>
        </div>
      </div>
    </div>
  );
}
