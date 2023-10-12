import { useEffect, useRef, useState } from "react";
import { ReplyForm } from "./ReplyForm";
import axios from "axios";
import { useGlobalContext } from "../../../../context";
import { usePoster } from "../../usePoster";

const SingleComment = ({ comment, setCommentsArr, commentsArr, postId }) => {
  const commentorId = JSON.parse(sessionStorage.getItem("user")).user._id;
  
  const cmdEle = useRef(null);
  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [replyInput, setIsReplyInput] = useState("");
  

  const addReply = (e) => {
    async function addReply(parentId, text) {
      const findAndAddReply = (commentsArr) => {
        for (const comment of commentsArr) {
          if (comment._id == e.target.id) {
            comment.reply.push({
              _id: Date.now(), // You can generate a unique ID here
              body: text,
              commentorId,
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
        // console.log(`Added reply "${text}" to parent with ID ${e.target.id}`);
        setCommentsArr(commentsArr);
        const { data } = await axios.post("/api/comment/createComment", {
          postId,
          commentsObj: commentsArr,
        });
  
        return;
      } else {//console.log(`Parent with ID ${parentId} not found`); 
      }
    }
    addReply(e.target.id, replyInput);
    setIsReplyInput("");
  };

  const editComment = async (commentId) => {
    function editCmd(commentsArr) {
      return commentsArr.map((cmd) => {
        if (commentId == cmd._id) {
          cmd.body = cmdEle.current.textContent;
          return commentsArr;
        }
        return editCmd(cmd.reply);
      });
    }
    editCmd(commentsArr);

    const { data } = await axios.put("/api/comment/editComment", {
      postId,
      commentorId,
      commentsArr,
    });
    setCommentsArr(data);
  };
  const deleteComment = async (commentId) => {
    
    function deleteCmd(commentsArr, commentId) {
      for (let i = 0; i < commentsArr.length; i++) {
         
        const obj = commentsArr[i];
        if (obj._id === commentId) {
          commentsArr.splice(i, 1);
          return commentsArr;
        } else if (obj.reply && obj.reply.length > 0) {
          const deleted = deleteCmd(obj.reply, commentId);
        
          if (deleted) {
            return commentsArr;
          }
        }
      }
      return commentsArr;
    }
    console.log(commentsArr);
    const newCommentsArr = deleteCmd(commentsArr, commentId);
    
    const { data } = await axios.put("/api/comment/deleteComment", {
      postId,
      commentorId,
      commentsArr: newCommentsArr,
    });
    
  };

 

  const whoCommented = usePoster( comment ? comment.commentorId : 'CEE')

  return (
    <>
      <article className="comment_card">
        <div className="comment_header">
          <img src={ whoCommented.showPoster && whoCommented.posterImage} alt="esutlogo" />
          <span>@{ whoCommented.showPoster && whoCommented.posterName}</span>
        </div>

        <div className="comment_body">
          <p
            data-body
            style={{ textAlign: "start", wordWrap: "break-word" }}
            contentEditable={isEdit}
            ref={cmdEle}
          >
            {comment.body}
          </p>
          {isEdit ? (
            <div className="reactions">
              <span onClick={() => editComment(comment._id)}>save</span>
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
              { (comment.commentorId == commentorId) && (
                <>
                  <span onClick={() => setIsEdit(!isEdit)}>
                    <i className="fa fa-edit"></i> Edit
                  </span>
                  <span onClick={() => deleteComment(comment._id)}>
                    <i className="fa fa-trash"></i>Delete
                  </span>
                </>
              )}
            </div>
          )}
        </div>
        {isReply && (
          <ReplyForm
            parentCommentId={comment._id}
            commentInput={replyInput}
            setCommentInput={setIsReplyInput}
            addComment={addReply}
            isReply={isReply}
          />
        )}
      </article>
      <div style={{ display: isReply ? "block" : "none", paddingLeft: 6 }}>
        {comment?.reply?.map((cmd) => {
          return (
            <SingleComment
              key={cmd._id}
              comment={cmd}
              setCommentsArr={setCommentsArr}
              commentsArr={commentsArr}
              postId={postId}
            />
          );
        })}
      </div>
    </>
  );
};
export default SingleComment;
