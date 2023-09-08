import { useState } from "react";
import { ReplyForm } from "./ReplyForm";
import { MyComment } from "../comment";

const SingleComment = ({ comment, setCommentsArr, commentsArr }) => {
  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [replyInput, setIsReplyInput] = useState("");
  const addReply = (e) => {
    function addReply(parentId, text) {
      const findAndAddReply = (commentsArr) => {
        for (const comment of commentsArr) {
          if (comment._id == e.target.id) {
            comment.reply.push({
              _id: Date.now(), // You can generate a unique ID here
              name: text,
              reply: [],
            });
            return true;
          } else if (comment.reply.length > 0) {
            if (findAndAddReply(comment.reply)) {
              return true;
            }
          }
        }
        return false;
      };

      if (findAndAddReply(commentsArr)) {
        console.log(`Added reply "${text}" to parent with ID ${e.target.id}`);
        setCommentsArr(commentsArr);
        return;
      } else {
        console.log(`Parent with ID ${parentId} not found`);
      }
    }
    addReply(e.target.id, replyInput);
    setIsReplyInput("");
  };

  return (
    <>
      <article className="comment_card">
        <div className="comment_header">
          <img src="esutlogo.jpg" alt="esutlogo" />
          <span>@Dilan</span>
        </div>

        <div className="comment_body">
          <p
            data-body
            style={{ textAlign: "start", wordWrap: "break-word" }}
            contentEditable={isEdit}
          >
            {comment.name}
          </p>
          {isEdit ? (
            <div className="reactions">
              <span>save</span>
              <span onClick={() => setIsEdit(false)}>cancel</span>
            </div>
          ) : (
            <div className="reactions">
              <span onClick={() => setIsReply(!isReply)}>
                <i
                  className={isReply ? "fa fa-arrow-down" : "fa fa-arrow-up"}
                ></i>
                Reply
              </span>
              <span onClick={() => setIsEdit(!isEdit)}>
                <i className="fa fa-edit"></i> Edit
              </span>
              <span>
                <i className="fa fa-trash"></i>Delete
              </span>
            </div>
          )}
        </div>
        {isReply && (
          <ReplyForm
            parentCommentId={comment._id}
            commentInput={replyInput}
            setCommentInput={setIsReplyInput}
            addComment={addReply}
          />
        )}
      </article>
      <div style={{ display: isReply ? "block" : "none", paddingLeft:6 }}>
        {comment?.reply?.map((cmd) => {
          return (
            <SingleComment
              key={cmd._id}
              comment={cmd}
              setCommentsArr={setCommentsArr}
              commentsArr={commentsArr}
            />
          );
        })}
      </div>
    </>
  );
};
export default SingleComment;
