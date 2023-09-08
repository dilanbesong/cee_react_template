export const ReplyForm = ({
  parentCommentId,
  commentInput,
  setCommentInput,
  addComment,
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
        <button
          type="button"
          id={parentCommentId}
          onClick={(e) => addComment(e)}
        >
          comment
        </button>
      </div>
    </>
  );
};
