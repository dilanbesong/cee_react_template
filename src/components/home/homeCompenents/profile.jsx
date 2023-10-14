import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context";
import Post from "./post";
import axios from "axios";
import { ThreeDots, ThreeCircles } from "react-loader-spinner";
const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user")).user;
  const [student, setStudent] = useState(null);
  const [isUser, setIsUser] = useState(true);
  const [isloadPost, setIsLoadPost] = useState(true);
  const [recieptList, setReciept] = useState([]);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [friendStatus, setFriendStatus] = useState("add");
  const [posts, setPosts] = useState([]);

  const { state } = useLocation();
  const { id } = useParams();


  async function viewUser() {
    const { data } = await axios.get(`/api/user/${state}`);
   
    setIsProfileLoading(true);

    if (data.email && data.email == user.email) {
      setStudent(user);
      setIsProfileLoading(false);
      setIsUser(true);
    
      return;
    }
    setIsProfileLoading(false);
    setStudent(data);
    callFriendStatus(data)
    setIsUser(false);
    return;
  }

  function callFriendStatus(student) {
  
    if (isProfileLoading) {
      if (student.FriendList.includes(user._id)) {
        setFriendStatus("You are friends");
        return;
      } else if (student.FriendRequestList.includes(user._id)) {
        setFriendStatus("sent request");
        return;
      }
      setFriendStatus("add");
      return;
    }
  }

  async function getMyPost() {
    const { data } = await axios.get(`/api/post/getMyPosts/${state || id}`);
    setIsLoadPost(true);
    if (data.posts) {
      setIsLoadPost(false);
      let myPost = [];
      myPost = data.posts.filter((post) => {
        return post.poster == user._id;
      });
      setPosts(myPost);
    }
  }

  async function getDepartmentalReciept() {
    const {
      data: { DepartmentalFees },
    } = await axios.get("/api/payment/getReciepts");
    if(DepartmentalFees){
       setReciept(DepartmentalFees);
       return
    }
   
  }
  useEffect(() => {
    getMyPost();
  }, [isloadPost]);

  useEffect(() => {
    viewUser();
    getDepartmentalReciept();
   // callFriendStatus();
  }, []);

  const sendFriendRequest = async () => {
    const { data } = await axios.put("/api/sendFriendOneRequest", {
      friendId: student._id,
    });
    if (data.msg) {
      alert(data.msg);
    }
  };

    

  const navigate = useNavigate();
  const postRecieptSlider = useRef(null);
  const paginatedSpanPostButton = useRef(null);
  const paginatedSpanRecieptButton = useRef(null);
  const allPostRef = useRef(null);
  const allRecieptRef = useRef(null);

  const handlePaginationPost = () => {
    paginatedSpanPostButton.current.classList.add("span_underline");
    paginatedSpanRecieptButton.current.classList.remove("span_underline");
    const PostIndex = 0;
    postRecieptSlider.current.style.transform = `translateX(${
      -allPostRef.current.clientWidth * PostIndex
    }px)`;
  };

  const handlePaginationReciept = () => {
    paginatedSpanPostButton.current.classList.remove("span_underline");
    paginatedSpanRecieptButton.current.classList.add("span_underline");
    const RecieptIndex = 1;
    postRecieptSlider.current.style.transform = `translateX(${
      -allRecieptRef.current.clientWidth * RecieptIndex
    }px)`;
  };

 
  return (
    <>
      {isProfileLoading ? (
        <div className="centerLoad">
          {" "}
          <ThreeCircles color="brown" />
        </div>
      ) : (
        <div className="View_profile" id="View_profile">
          <nav>
            {" "}
            <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
            Profile
          </nav>

          <div className="profile_header">
            <div
              className="background_profile"
              style={{ backgroundImage: `url('${student.backgroundProfile}')` }}
            >
              <p className="profile_img">
                <img src={user.profileImage} alt="user_profile.jpg" />
                <i className="fa fa-camera" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div className="user_name">
            <strong>{student.username}</strong>
            <p>{student.email}</p>
          </div>
          <div className="checkup_btn">
            {!isUser && (
              <button onClick={() => sendFriendRequest(state)}>
                {friendStatus}
              </button>
            )}
            {( (state == user._id) || (user.isAdmin  ) ) && (
              <button onClick={() => navigate("/home/profileupdate", { state: student._id}) } >
                edit <i className="fa fa-edit"></i>
              </button>
            )}
            <button onClick={() => navigate("/home/location")}>
              {" "}
              local <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
            </button>
          </div>
          <ul className="info_list">
            <li>
              <i className="fa fa-code" aria-hidden="true"></i> Reg No{" "}
              {student.regNumber}
            </li>
            <li>
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              Department of computer engineering
            </li>
            <li onClick={() => navigate("/home/friendlist")}>
              <i className="fa fa-users" aria-hidden="true"></i>My Friends
            </li>
          </ul>
          <div className="profile_pagination">
            <span
              className="span_underline"
              ref={paginatedSpanPostButton}
              onClick={() => handlePaginationPost()}
            >
              Post
            </span>
            {(isUser || student.isAdmin) && (
              <span
                ref={paginatedSpanRecieptButton}
                onClick={() => handlePaginationReciept()}
              >
                Receipts
              </span>
            )}
          </div>

          <div className="postRecieptContainer">
            <div className="postReceiptSlider" ref={postRecieptSlider}>
              <div className="all_posts" ref={allPostRef}>
                {isloadPost ? (
                  <div className="centerLoad">
                    <ThreeCircles color="grey" />
                  </div>
                ) : (
                  posts.reverse().map((post, postIndex) => {
                    return (
                      <div
                        key={post._id}
                        onClick={() => navigate(`/home/post/${post._id}`)}
                      >
                        <Post {...post} postIndex={-1} postSize={0} />
                      </div>
                    );
                  })
                )}

              
              </div>
              <div className="all_reciepts" ref={allRecieptRef}>
                {recieptList.map((reciept) => {
                  return (
                    <div className="ReceiptCard" key={reciept._id}>
                      <p className="logoImage">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt="" />
                      </p>
                      <p>
                        <b>Ref Number : {reciept.refNumber.reference}</b>
                      </p>
                      <p>
                        <b>Name : {user.username}</b> 
                      </p>
                      <p>
                        <b>Reg Number : {user.regNumber}</b>
                      </p>
                      <p> Amount paid : N{reciept.amount}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className="all_posts"></div> */}
        </div>
      )}
    </>
  );
};

export default Profile;
