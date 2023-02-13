import "./Rampage.scss";
import React from "react";
import "../../App.scss";
import views from "../../images/views.svg";
import likes from "../../images/likes.svg";
import CommentBox from "../Comment/CommentBox";
// import CommentWall from "../Comment/CommentWall";
import Timestamp from "./ChangeTimestampToDate";

const VideoDetails = ({ video }) => (
  <div className="Rampage">
    <div className="Rampage__highlight">{video.title}</div>
    <div className="Rampage__info">
      <div className="Rampage__info__text-viewIcon">
        {video.channel}
        <div className="Rampage__info__text-viewIcon--right">
          <img className="Rampage__info__icon" src={views} alt="" />
          <p className="Rampage__info__text-viewIcon--number">{video.views}</p>
        </div>
      </div>
      <div className="Rampage__info__date-likes">
        <p className="Rampage__info__text-viewIcon--number">
          <Timestamp timestamp={video.timestamp} />
        </p>

        <div className="Rampage__info__date-likes--right">
          <img className="Rampage__info__icon" src={likes} alt="" />
          <p className="Rampage__info__text-viewIcon--number">{video.likes}</p>
        </div>
      </div>
    </div>
    <div className="Rampage__description">{video.description}</div>
    <p className="Rampage__description__CommentsNum">
      {video.comments.length} Comments
    </p>
    <div>
      <CommentBox />
    </div>
    <div></div>
  </div>
);
export default VideoDetails;
