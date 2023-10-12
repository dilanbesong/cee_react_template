export const ReplyForm = ({
  parentCommentId,
  commentInput,
  setCommentInput,
  addComment,
  isReply
}) => {
 
  return (
    <>
      <div className="main_comment_form">
        <textarea
          name=""
          id=""
          cols="30"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          rows="10"
          placeholder="type..."
        ></textarea>
        {isReply? <strong id={parentCommentId} onClick={(e) => addComment(e)}>reply</strong>:
         <><button
          type="button"
          id={parentCommentId}
          onClick={(e) => addComment(e)}
        >
          comment
        </button></>}
      </div>
    </>
  );
};
