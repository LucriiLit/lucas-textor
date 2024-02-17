import Ani01 from "./smuus-bubbles_01.mp4";

function AniFunction01() {
  return (
    <div className="aniContainer">
      <video className="projectAni01" src={Ani01} autoPlay loop muted></video>
    </div>
  );
}

export default AniFunction01;
