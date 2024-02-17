import basicAni from "./projects/anis/smuus-bubbles_01.mp4";

export default function Contact() {
  return (
    <div className="contentSection">
      <div className="contentContainer">
        <video
          className="basicAni_B"
          src={basicAni}
          autoPlay
          loop
          muted
        ></video>
        <div>
          <h2>I know you do</h2>
          <h1>
            Feel free to drop <br></br>me a line!
          </h1>
          <p>
            <a href="mailto:hey@eluxtre.de">
              <u>hey@eluxtre.de</u>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
