import { useState } from "react";
import { ReplyForm } from "./CommentFeatures/ReplyForm";
import SingleComment from "./CommentFeatures/singleComment";
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import axios from "axios";





const Comment = ({ postId, postComments }) => {


  const [commentsArr, setCommentsArr] = useState(postComments);
  const [commentInput, setCommentInput] = useState(null);
  const [isLoadComment, setIsLoadComment] = useState(false);
  let userObj = JSON.parse(sessionStorage.getItem('user'))

  function MyComment(text) {
  this._id = new Date().getTime().toString();
  this.body = text;
  this.commentorId =  userObj.user._id 
  this.reply = new Array();
}
  
  const addComment = (e) => {
    commentsArr.push(new MyComment(commentInput));
    setCommentInput("");
    createComment()
  };

  async function createComment() {
    const { data } = await axios.post("/api/comment/createComment", {
      postId,
      commentsObj: commentsArr,
    });
  
    if (data[0]) {
      setCommentsArr(data);
      setIsLoadComment(false);
      return;
    }
   // alert(data.msg);
  }

  // useEffect(() => {
  //   if (commentInput === "") createComment();
  // });

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
          {isLoadComment ? (
            <ThreeDots color="grey" />
          ) : (
            commentsArr.map((comment, i) => {
              return (
                <SingleComment
                  key={i}
                  comment={comment}
                  setCommentsArr={setCommentsArr}
                  commentsArr={commentsArr}
                  postId={postId}
                />
              );
            })
          )}
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
