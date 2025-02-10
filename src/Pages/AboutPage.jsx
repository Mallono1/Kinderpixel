import React from "react";
import "./AboutPage.css";
import about_img from "../assets/img/about.jpg";
import playbutton from "../assets/img/Playbutton.png";
import video_1 from "../assets/img/Mein Film-KP.mp4";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";

function AboutPage() {
  return (
    <div className="aboutpage" id="aboutpage">
      <div className="aboutpage-left">
        {/* <img src={about_img} alt="aboutpage_img" className="aboutpage_img" />
            <img src={playbutton} alt="playbutton2" className="playbutton2" />
            <video
                      className="videoPlayer"
                      width="70%"
                      // ref={videoRef}
                      src={video_1}
                    ></video> */}
        <VideoPlayer />
      </div>
      <div className="aboutpage-right">
        <h2>About Kinderpixel</h2>
        <p>
          Wir fördern die Kraativität von Kindern und annimieren mehr Zeit mit
          Stift und Papier zu verbringen.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
