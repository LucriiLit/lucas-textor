import basicAni from "./projects/anis/smuus-bubbles_01.mp4";
import ContactAvatar from "./images/contact-alias-lt-04.png";
import ContactOverlay from "./images/contact-overlay-01.png";

export default function Contact() {
  return (
    <div className="contentSection">
          <img src={ContactOverlay} alt="Cover of a Selected track" className="contactOverlay" />
          <div className="contentContainer">
        <video
          className="basicAni_B"
          src={basicAni}
          autoPlay
          loop
          muted
        ></video>
        <div>
          <h2><br></br><br></br>I know you do</h2>
          <h1>
            Feel free to drop <br></br>me a line!
          </h1>
          <p>
            <a href="mailto:hey@eluxtre.de">
              <u>hey@eluxtre.de</u>
            </a>
          <img src={ContactAvatar} alt="Cover of a Selected track" className="contactAvatar" />
          </p>
        </div>
      </div>
    </div>
  );
}
