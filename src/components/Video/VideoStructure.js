import React from "react";
import VideoData from "../../data/video-details.json";
import MainVideo from "./MainVideo";
import SideVideo from "./SideVideo";
import CommentWall from "../Comment/CommentWall";
// import CommentBox from "../Comment/CommentBox";
import VideoDetails from "../Rampage/Rampage";
import Comment from "../Comment/Comment";
import "./SideVideo.scss";

class VideoStructure extends React.Component {
  state = {
    currentVideo: VideoData[0],
    VideoData,
  };

  handleVideoClick = (video) => {
    this.setState({ currentVideo: video });
  };

  render() {
    const { currentVideo, VideoData } = this.state;
    const SideVideoData = VideoData.filter(
      (video) => video.id !== currentVideo.id
    );

    return (
      <div>
        <div>
          <MainVideo video={currentVideo} />
        </div>
        <div>
          <VideoDetails video={currentVideo} />
          <CommentWall VideoComment={currentVideo.comments} />
          <Comment VideoComment={currentVideo.comments} />
          <div>
            <p className="SideVideoSpan">NEXT VIDEOS</p>
            <SideVideo
              VideoData={SideVideoData}
              onVideoClick={this.handleVideoClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoStructure;

// import React from "react";
// import VideoData from "../../data/videos.json";
// import MainVideo from "./MainVideo";
// import SideVideo from "./SideVideo";
// import Comment from "../Comment/Comment";
// import CommentBox from "../Comment/CommentBox";

// class VideoStructure extends React.Component {
//   state = {
//     currentVideo: VideoData[0],
//     VideoData,
//   };

//   handleVideoClick = (video) => {
//     this.setState({ currentVideo: video });
//   };

//   render() {
//     const { currentVideo, VideoData } = this.state;
//     const SideVideoData = VideoData.filter(
//       (video) => video.id !== currentVideo.id
//     );

//     return (
//       <div>
//         <div>
//           <MainVideo video={currentVideo} />
//         </div>
//         <div>
//           <CommentBox />
//           <Comment />
//           <SideVideo
//             VideoData={SideVideoData}
//             onVideoClick={this.handleVideoClick}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default VideoStructure;
