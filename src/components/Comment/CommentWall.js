import "./CommentWall.scss";
// import img from "../../images/Mohan-muruge.jpg";
import Timestamp from "../Rampage/ChangeTimestampToDate";

const CommentWall = ({ VideoComment }) => {
  return (
    <div className="card-list">
      {VideoComment.map((Comment) => (
        <div className="card" key={Comment.id}>
          <div className="nameCommentDate">
            <div className="nameComment">
              {/* <img src={img} alt="" /> */}
              <div className="emptyImg"></div>
              <div className="card__name">{Comment.name}</div>
              {/* <CommentBox /> */}
              {/* <Comment /> */}
            </div>
            <div className="card__date">
              <Timestamp timestamp={Comment.timestamp} />
            </div>
          </div>
          <div className="card__comments">{Comment.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentWall;
