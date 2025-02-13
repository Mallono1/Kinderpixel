import { useEffect, useRef, useState } from "react";
import "./About.css";
// import about_img from "../assets/img/about.jpg";
// import playbutton from "../assets/img/Playbutton.png";
// import video_1 from "../assets/img/Mein Film-KP.mp4";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        {/* <img src={about_img} alt="about_img" className="about_img" />
        <img src={playbutton} alt="playbutton" className="playbutton" /> */}
        {/* <video
          className="videoPlayer"
          width="70%"
          // ref={videoRef}
          src={video_1}
        ></video> */}
        <VideoPlayer />
      </div>
      <div className="about-right">
        <h2>About Kinderpixel</h2>
        <p>
        We promote children's creativity and encourage them to spend more time with pen and paper.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
