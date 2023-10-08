import { Link } from "react-router-dom";
import { useState, useEffect, useRef,} from "react";
import io from "socket.io-client";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "./post";
import { Circles, ThreeCircles, ThreeDots } from "react-loader-spinner";

const socket = io.connect("http://localhost:5000");

const Home = () => {
  const navigate = useNavigate();
  const allPostEle = useRef()

  const [onLineFriends, setOnLineFriends] = useState([]);
  const [skipCount, setSkipCount ] = useState(0)
  const [postLimit, setPostLimit ] = useState(2) 

  const [student, setStudent] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { user } = student;
 
  socket.on("status", (activeUsers) => {
    const activeFriends = activeUsers.filter( onlineUser => {
       return user.FriendList.includes(onlineUser._id)
    })
    setOnLineFriends(activeFriends);
  });

  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [postloading, setPostLoading] = useState(true);
  const [bottomLoader, setBottomLoader] = useState(false)
  const [postcategory, setPostCategory] = useState("all");


  const findPost = async (e) => {
    setSearchInput(e.target.value);
    const { data } = await axios.get(`/api/post/searchPost/${searchInput}`);
    if (data[0]) {
      setPostLoading(false);
      setPosts(data);
    }
  };
  const caterogicallySearchPost = async () => {
    const { data } = await axios.get(`/api/post/searchPost/${postcategory}`);
    setPostLoading(true);
    if (data[0]) {
      setPostLoading(false);
      setPosts(data);
    }
  };

  async function getPost() {
    //const { data } = await axios.get("/api/post/getAllPost");
  // let [skipCount, postLimit ] = [ 0, 2]
   
   const { data } = await axios.get(`/api/post/sequenciallyFetchPost/${skipCount}/${postLimit}`)
    if (data.posts) {
      setPosts(data.posts);
      setPostLoading(false);
      return;
    }
  }
  useEffect(() => {
    caterogicallySearchPost();
  }, [postcategory]);

  useEffect(() => {
    getPost();
     socket.emit("active", { userId: user._id });
  }, []);



async function loadMoreCards(){
    setSkipCount(skipCount => skipCount + 1)
    setPostLimit(postLimit => postLimit + 5)
    const { data } = await axios.get(`/api/post/sequenciallyFetchPost/${skipCount}/${postLimit}`)
    if(data.posts){
       setPosts( posts => {
          return [...posts, ...data.posts]
       })
      return
    }
    alert(data.err)  
  }
  const [isLastCard, setIsLastCard ] = useState(false)
  useEffect( () => {
    const lastCardObserver = new IntersectionObserver( entries => {
        const lastCard = entries[0]
       setIsLastCard(lastCard.isIntersecting)
        if(lastCard.isIntersecting){
           loadMoreCards()
           lastCardObserver.unobserve(lastCard.target)
           return
        }
         
    })
    const lastCard = allPostEle.current.lastChild
    lastCardObserver.observe(lastCard)
    
  }, [isLastCard])




  return (
    <>
      <div className="All_posts" id="All_posts">
        <header className="status_section">
          <strong>Create</strong>
          <div className="all_status">
            <div
              className="status_card"
              data-level="+"
              onClick={() => navigate("/home/createPost")}
            ></div>
            {onLineFriends.map((user) => {
              return (
                <div
                  className="onLineCard"
                  key={user._id}
                  onClick={() => navigate("/home/profile/", { state: user._id })}
                >
                  <img src={user.profileImage} alt="" />
                  <p>{user.username}</p>
                </div>
              );
            })}

            {/* <div className="status_card" data-level="200lv"></div> */}
               
          </div>
          <div className="add_post">
            <div>
              <img src={user.profileImage} alt="esutlogo" />
            </div>
            <div>
              <input
                type="search"
                placeholder="Catergorically search or use keyword"
                value={searchInput}
                onInput={(e) => findPost(e)}
              />
            </div>
            <div>
              <select
                name=""
                id=""
                onChange={(e) => setPostCategory(e.target.value)}
              >
                <option value="all">all</option>
                <option value="cee">cee</option>
              </select>
            </div>
          </div>
        </header>
        <section className="all_post" ref={allPostEle}>
          {postloading ? (
            <div className="centerLoad">
              <ThreeCircles color="grey" />
            </div>
          ) : (
            posts.reverse().map((post, postIndex) => {
              return (
                  <Post {...post} postIndex={postIndex} postSize={posts.length}  />

                
              );
            })
          )}

          {/* <article className="postCard">
                <div className="suggestions">
                    <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>3k mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article>  

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>1 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>1 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 
                    
                </div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid">
                      <div>1</div>
                      <div>2</div>
                  </div>

                 <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>

                </div>
              </article>

               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_3">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>
               <article className="postCard">
                <Link to='/home/post/1' style={{ color:'#000'}} preventScrollReset>
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                  <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
                </Link>
              </article>


               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_3">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
                
              </article>

               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article> */}
        </section>
      </div>
    </>
  );
};

export default Home;
