// import Suggestion from './suggestion'
import Filegrid from "./filegrid";
import { timeAgo } from "./createPost";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots,  InfinitySpin } from "react-loader-spinner";
import { usePoster } from "../usePoster";
import { formateText } from '../textFormate'
const Post = ({
  _id,
  body,
  fileList,
  poster,
  createdAt,
  updatedAt,
  Likes,
  Comments,
  views,
  postIndex,
  postSize,
}) => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [isloadSuggestions, setIsLoadSuggestion] = useState(true);
  const [ loadbottom, setLoadBottom ] = useState(false)
 
  
  const postText = useRef()
  const postCard = useRef()
  const navigate = useNavigate();
  const post = { body, fileList, poster };
  const f = new Intl.NumberFormat(undefined, { notation: "compact" });

  function generateSuggestionPostIndexList() {
    let suggestionIndexList = [];
    let postIndex;
    for (let i = 0; i <= postSize; i++) {
      postIndex = Math.floor(Math.random(0, 1) * postSize);
      suggestionIndexList.push(postIndex);
      suggestionIndexList = [...new Set(suggestionIndexList)];
    }

    return suggestionIndexList;
  }

  async function getFriendSuggestion() {
    const { data } = await axios.get("/api/post/friendSuggestions");
    if (data.FriendSuggestions) {
      setIsLoadSuggestion(false);
      setSuggestionList(data.FriendSuggestions);
      return;
    }
  }

  async function getGroupSuggestion() {
    const { data } = await axios.get("/api/post/groupSuggestions");

    if (data.GroupSuggestions.length) {
      setSuggestionList((suggestionList) => {
        return [...suggestionList, data.GroupSuggestions];
      });
      return;
    }
  }
   
  useEffect(() => {
    getFriendSuggestion();
    getGroupSuggestion();
    postText.current.innerHTML = formateText(body)
  
  }, []);



  const SuggCard = ({ username, _id, profileImage }) => {
    return (
      <article key={_id} className="sugg_card">
        <div className="sugg_img">
          <img src={profileImage} alt="esutlogo" />
          <p>{username}</p>
          <p>0 mutual mates</p>
        </div>
        <div className="sugg_btns">
          <button>add</button>
          <button>remove</button>
        </div>
      </article>
    );
  };

  const isPostIndex = generateSuggestionPostIndexList().includes(postIndex);
  const whoPosted = usePoster(poster);
  
  return (
    <>
      <article id={postIndex} className="postCard" ref={postCard} >
        {isPostIndex &&
          (isloadSuggestions ? (
            <ThreeDots />
          ) : (
            <div className={isPostIndex && "suggestions"}>
              {suggestionList.map((sugg) => {
                return <SuggCard {...sugg} />;
              })}
            </div>
          ))}

        <div className="mainCard" onDoubleClick={() => navigate(`/home/post/${_id}`)}>
          <header className="cardheader">
            <div className="user_info">
              <img
                src={whoPosted.showPoster && whoPosted.posterImage}
                onClick={() =>
                  navigate(whoPosted.navigateToProfileUrl)
                }
                alt="poster_profile"
              />
              <div className="username_and_date">
                <span>@ {whoPosted.showPoster && whoPosted.posterName}</span>
                <span style={{ fontSize: 12 }}>
                  {" "}
                  posted {timeAgo(new Date(createdAt)) || 0}
                </span>
                <span style={{ color: "#ddd", fontSize: 12 }}>
                  {" "}
                  last edited {timeAgo(new Date(updatedAt)) || 0}{" "}
                </span>
              </div>
            </div>
          </header>
          <p id="postText" ref={postText}> {formateText(body)}</p>
          <Filegrid fileList={fileList} />

          <div className="number_of_comments">
            {f.format(Comments.length)} Comments
          </div>
          <section className="post_reactions">
            <span>
              <i className="fa fa-heart" aria-hidden></i> Love{" "}
              {f.format(Likes.length)}
            </span>
            <span>
              <i className="fa fa-comment" aria-hidden></i> Comment
            </span>
            <span>
              {" "}
              <i className="fa fa-eye" aria-hidden></i> {f.format(views)} views{" "}
            </span>
          </section>
        </div>
        {/* <div style={{ marginLeft:'10%' }}> { loadbottom &&  <InfinitySpin color="brown"/> } </div> */}
      </article>
    </>
  );
};

export default Post;
