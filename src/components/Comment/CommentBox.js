import React, { useState } from "react";
import "./Comment.scss";
import img from "../../images/Mohan-muruge.jpg";
import commentImg from "../../images/add_comment.svg";
import "../Comment/CommentWall.scss";
// import CommentBox from "../Comment/CommentWall";
const CommentBox = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, { name, comment }]);
    setName("");
    setComment("");
  };
  const date = new Date();
  const todayDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div>
      <div>
        <section className="CommentWall">
          <form className="CommentWall__Form">
            <fieldset className="field">
              <section className="field__section">
                <img className="field__img" id="img" src={img} alt="" />
              </section>
              <section className="field__sec field__sec--CommentWall">
                <label className="field__labelText" htmlFor="name">
                  JOIN THE CONVERSATION
                </label>
                <div className="comments">
                  <textarea
                    type="input"
                    className="input"
                    name="comments"
                    id="comments"
                    placeholder="Add a new comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  />
                </div>
                <div className="CommentWallForm__buttom">
                  <img src={commentImg} alt="" />
                  <button type="submit" onClick={handleSubmit}>
                    COMMENT
                  </button>
                </div>
              </section>
            </fieldset>
          </form>
          <section className="CommentWall">
            <div id="CommentWall__comment">
              {comments.map((c, index) => (
                <div key={index}>
                  <div className="nameComment">
                    {c.name} {todayDate}
                  </div>
                  <div>{c.comment}</div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default CommentBox;
