import basicAni from "./projects/anis/smuus-bubbles_04d.mp4";
import ContactOverlay from "./images/contact-overlay-02.png";

export default function Contact() {
  return (
    <div className="contentSection">
      <img
        src={ContactOverlay}
        alt="Cover of a Selected track"
        className="contactOverlay"
      />
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
            <h2>
              <br></br>
              <br></br>Open to work (:
            </h2>
            <h1>
              Currently working <br></br>on Upwork!
            </h1>
            <p>
              <a
                href="https://www.upwork.com/freelancers/~01aedda771e4607b35"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#x21B3; <u>text me there</u>
              </a>
            </p>
          </div>
          {/* <img src={ContactAvatar} alt="Cover of a Selected track" className="contactAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
