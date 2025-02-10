import React from "react";
import "./VideoPlayer.css";
import video_1 from "../../assets/img/Mein Film-KP.mp4";

function VideoPlayer() {
  return (
    <div className="video-player">
      <video width="400" controls>
        {" "}
        <source src={video_1} />
      </video>
    </div>
  );
}

export default VideoPlayer;
