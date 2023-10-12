import { useEffect, useRef, useState } from "react";
import Comment from "./comment";
import Suggestion from "./suggestion";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ThreeDots, ThreeCircles } from "react-loader-spinner";
import Filegrid from "./filegrid";
import { AudioPlayer } from "react-audio-player-component";
import { timeAgo } from "./createPost";
import { usePoster } from "../usePoster";
import { formateText } from "../textFormate";

const ViewPost = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const f = new Intl.NumberFormat(undefined,{ notation:"compact"})
  const [post, setPost] = useState(null);
  const postText = useRef()
  const [postLikes, setPostLikes ] = useState(0)
  const [ student, setStudent ] = useState(JSON.parse(sessionStorage.getItem('user')))
  const { user } = student
  const [loadpost, setLoadPost] = useState(true);
  const { id } = useParams();
  
  async function specificPost() {
    const { data } = await axios.post(`/api/post/viewPost`, { postId: id });
    if (data.body) {
      setLoadPost(false);
      setPost(data);
       postText.current.innerHTML = formateText(post.body)
      return;
    }
  }
  
  useEffect(() => {
    specificPost();
    
  }, [id])

        async function getViews(){
           const { data } = await axios.post('/api/post/numberOFviews', { postId:id })
            setPost( post => {
             return {...post, views:data }
            })
           return
        }

  useEffect( () => {
      getViews()
      // postText.current.innerHTML = post && formateText( post.body )
   },[])

  const deletePost = async (postId) => {
    let ok = confirm('Do you want to delete this post')
    if(ok){
      const { data } = await axios.delete(`/api/post/deletePost/${postId}/${user._id}`)
     if(data.deletePost){
       alert('Post has been deleted')
       navigate('/home/main')
       return
     }
    }
     
  }

  const handleLikePost = async (postId) => {
     const { data } = await axios.post('/api/post/likePost', { postId, userId:user._id })
     setPostLikes(data.length)
  }

 const whoPosted = usePoster(post ? post.poster : 'CEE')
  return (
    <>
      {loadpost ? (
       <div className="centerLoad"><ThreeCircles color="grey"/></div>
      ) : (
        <div className="See_post">
          <nav>
            <i
              className="fa fa-arrow-left"
              onClick={() => navigate(-1)}
            ></i>{" "}
            Post
          </nav>
          <article className="postCard">
            {/* <Suggestion/> */}
            <div className="mainCard">
              <header className="cardheader">
                <div className="user_info">
                  <img src={whoPosted.showPoster && whoPosted.posterImage} alt="esutlogo" />
                  <div className="username_and_date">
                    <span> @ { whoPosted.showPoster && whoPosted.posterName }</span>
                    <span style={{fontSize:12}}> posted { timeAgo(new Date(post.createdAt))}</span>
                    <span style={{color:'#ddd', fontSize:12}}> last edited {timeAgo(new Date(post.updatedAt))}</span>
                  </div>
                </div>
                <div>
                  <ul className="modify_post">
                    { (post.poster == user._id || user.isAdmin ) && <>
                        <li onClick={() => navigate(`/home/editPost/${id}`)}>Edit <i className="fa fa-edit"></i></li>
                        <li onClick={() => deletePost(id)}>Delete <i className="fa fa-trash"></i></li>
                    </>}
                  </ul>
                </div>
              </header>
              <p id="postText" ref={postText}>{post.body}</p>
              <div className= { (post.fileList.length == 0) ? '': "fileGrid filegrid_1 showOneFile"}>
                {post.fileList.map((file) => {
                  if (file.includes("data:audio")) {
                    return (
                      <div
                        style={{
                          height: "400px",
                          background: "rgba(255, 248, 222)",
                        }}
                      >
                        <AudioPlayer
                          src={file}
                          minimal={false}
                          width={400}
                          trackHeight={75}
                          barWidth={3}
                          gap={3}
                          visualise={true}
                          backgroundColor="#FFF8DE"
                          barColor="#C1D0B5"
                          barPlayedColor="#99A98F"
                          skipDuration={2}
                          showLoopOption={true}
                          showVolumeControl={true}
                        />
                      </div>
                    );
                  } else if (file.includes("data:image")) {
                    return (
                      <div style={{ height: "400px" }}>
                        <img src={file} alt="" />
                      </div>
                    );
                  } else  {
                    return (
                      <div style={{ height: "400px" }}>
                        {" "}
                        <video src={file} controls></video>
                      </div>
                    );
                  }
                })}

                {/* <div style={{ height: "400px" }}>1</div>
                <div style={{ height: "400px" }} >2</div>
                <div style={{ height: "400px" }}>3</div> */}
              </div>
              <div className="number_of_comments">{f.format(post.Comments.length)} Comments</div>
              <section className="post_reactions">
                <span onClick={ () => handleLikePost(post._id) }>
                  <i className="fa fa-heart" aria-hidden="true"></i> Love {f.format(postLikes)}
                </span>
                <span>
                  <i className="fa fa-comment" aria-hidden="true"></i> Comment
                </span>
                <span>
                  {" "}
                  <i className="fa fa-eye" aria-hidden="true"></i> {f.format(post.views)} views
                </span>
              </section>
              <Comment postId={post._id} postComments={post.Comments} />
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default ViewPost;
