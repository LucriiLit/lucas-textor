import basicAni from "./projects/anis/smuus-bubbles_04d.mp4";
import ContactAvatar from "./images/contact-alias-lt-09.png";
import ContactOverlay from "./images/contact-overlay-02.png";

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
        <div className="contactContainer">
          <div>
            <h2><br></br><br></br>Open to work (:</h2>
            <h1>
              Feel free to drop <br></br>me a line!
            </h1>
            <p>
              <a href="mailto:hey@eluxtre.de">
                &#x21B3; <u>hey@eluxtre.de</u>
              </a>
            </p>
          </div>
          {/* <img src={ContactAvatar} alt="Cover of a Selected track" className="contactAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
