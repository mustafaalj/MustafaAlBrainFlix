import "./MainVideo.scss";
import React from "react";
// import VideoData from "../../data/videos.json";
// const videoOne = VideoData[0];
const MainVideo = ({ video }) => (
  <div className="MainVideoBox">
    <video className="img" controls poster={video.image} src={video.url} />
  </div>
);
export default MainVideo;
