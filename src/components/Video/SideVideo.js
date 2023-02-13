// import React from "react";

// const SideVideo = ({ video }) => {
//   if (!video) {
//     return <h1>nothing</h1>;
//   }
//   return (
//     <div className="SideVideo">
//       <div className="SideVideo__video">
//         <video
//           className="SideVideo__img"
//           poster={video.image}
//           src={video.url}
//         />
//       </div>

//       <div>
//         <div className="SideVideo__text SideVideo__text--bold">
//           {video.title}
//         </div>
//         <div className="SideVideo__text">{video.channel}</div>
//       </div>
//     </div>
//   );
// };
// export default SideVideo;
import React from "react";
import "./SideVideo.scss";

const SideVideo = ({ VideoData, onVideoClick }) => {
  if (!VideoData) {
    return null;
  }

  return (
    <div className="SideVideoBox">
      {VideoData.map((video) => (
        <div
          key={video.id}
          className="SideVideoBox__video"
          onClick={() => onVideoClick(video)}
        >
          <video
            className="SideVideoBox__img"
            poster={video.image}
            src={video.url}
          />

          <div className="SideVideoBox__info">
            <div className="SideVideoBox__text SideVideoBox__text--bold">
              {video.title}
            </div>
            <div className="SideVideoBox__text">{video.channel}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideVideo;
