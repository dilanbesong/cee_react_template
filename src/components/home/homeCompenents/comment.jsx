import { useState } from "react";
import { ReplyForm } from "./CommentFeatures/ReplyForm";
import SingleComment from "./CommentFeatures/singleComment";

export function MyComment(text) {
  this._id = new Date().getTime().toString();
  this.name = text;
  this.reply = new Array();
}

const Comment = () => {
  const [commentsArr, setCommentsArr] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const addComment = (e) => {
     setCommentsArr( commentsArr => {
      return [...commentsArr, new MyComment(commentInput)]
     })
     setCommentInput('')
  };

  const editComment = (e) => {};
  const deleteComment = (e) => {};
  return (
    <>
      <section className="post_comments">
        <ReplyForm
          parentCommentId={"1"}
          commentInput={commentInput}
          setCommentInput={setCommentInput}
          addComment={addComment}
        />
        <div className="all_comments">
          {commentsArr.map((comment, i) => {
            return (
              <SingleComment
                key={i}
                comment={comment}
                setCommentsArr={setCommentsArr}
                commentsArr={commentsArr}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Comment;


















































































































// const commentsData = [
//   {
//     _id: 23345,
//     name: "hello",
//     reply: [
//       {
//         _id: 56768,
//         name: "hello child",
//         reply: [
//           {
//             _id: 678493,
//             name: "hello child child",
//             reply: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     _id: 54575,
//     name: "second text",
//     reply: [
//       {
//         _id: 54656,
//         name: "second text child",
//         reply: [],
//       },
//     ],
//   },
//   {
//     _id: 92983,
//     name: "third child",
//     reply: [],
//   },
// ];