import CommentWall from "../Comment/CommentWall";
import img from "../../images/Mohan-muruge.jpg";

function Comment(VideoComment) {
  if (!VideoComment || !Array.isArray(VideoComment)) return null;
  return (
    <section className="card-list">
      {VideoComment.map((VideoComment) => (
        <CommentWall
          key={VideoComment.id}
          name={VideoComment.name}
          comment={VideoComment.comment}
          date={VideoComment.timestamp}
          img={img}
        />
      ))}
    </section>
  );
}
export default Comment;
