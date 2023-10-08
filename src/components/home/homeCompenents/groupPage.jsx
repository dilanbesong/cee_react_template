import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots, ThreeCircles } from "react-loader-spinner";
import { timeAgo } from "./createPost";
import Post from "./post";
import PhotoSlide from "./photoSlide";

const GroupPage = () => {
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [memberState, setMemberState] = useState('follow')
  const [isLoadingGroup, setIsLoadingGroup] = useState(true);
  const [postLoading, setPostLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [groupGalery, setGroupGalery ] = useState([])
  const groupslideEle = useRef()
  const gallerySliderEle = useRef()
  const allPostEle = useRef()
  const moveToGaleryButton = useRef()
  const moveToGroupPostButton = useRef()
  const { id } = useParams();

  const [student, setStudent] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { user } = student;

  const moveToGalery = () => {  
     const width = gallerySliderEle.current.clientWidth
     const galaryIndexPostion = 1
     moveToGaleryButton.current.classList.add('pagination_underline')
     moveToGroupPostButton.current.classList.remove('pagination_underline')
     groupslideEle.current.style.transform = `translateX(${ - width * galaryIndexPostion }px)`
     groupslideEle.current.style.transition = `500ms`
  }

  const moveToGroupPost = () => {
    const width = allPostEle.current.clientWidth
    const groupPostIndexPosition = 0
    moveToGroupPostButton.current.classList.add('pagination_underline')
    moveToGaleryButton.current.classList.remove('pagination_underline')
    groupslideEle.current.style.transform = `translateX(${ -width * groupPostIndexPosition }px)`
    groupslideEle.current.style.transition = `500ms`
  }

  async function viewGroup() {
    const { data } = await axios.get(`/api/getGroup/${id}`);
    setIsLoadingGroup(false);
    setGroup(data)
  }
  async function getGroupPost() {
    const { data } = await axios.get(`/api/getGroupPost/${id}`);
    if (data.length >= 1) {
      setPosts(data);
      const groupFiles = data.map( post => post.fileList).flat(1)
      setGroupGalery(groupFiles)
      setPostLoading(false);
      return;
    }
  }
  useEffect(() => {
     viewGroup();
    if(isLoadingGroup == false){
      if(group.groupMembers.includes(user._id)){
        setMemberState('You are a member')
        return
     }else{
        setMemberState('join')
     }
    }
    getGroupPost();
    
  }, []);

  const joinOrLeaveGroup = async (groupId) => {
     const { data } = await axios.put('/api/joinGroup', { groupId })
     setGroup(data)
     if(memberState == 'join'){
        setMemberState('You are a member')
        return
     }else{
        setMemberState('join')
     }
     
  }

  return (
    <>
      {isLoadingGroup ? (
        <div className="centerLoad"> <ThreeCircles color="brown"/></div>
      ) : (
        <div className="groupPageSection">
          <div className="groupProfile_pic" style={{ backgroundImage:`url('${group.groupBackgroundProfile}' )`}}>
            <nav>
              {" "}
              <i
                className="fa fa-arrow-left"
                onClick={() => navigate(-1)}
              ></i>{" "}
              Group
            </nav>
            <p>
              <img
                className="groupPic"
                src={group.groupProfile}
                alt="esutlogo"
              />
            </p>
          </div>
          <div className="group_header">
            <h3>{group.groupName}</h3>
            <p>{group.groupDescription}</p>
          </div>
          <div className="btn_section">
            {( (group.groupcreator == user._id) || user.isAdmin) && (
              <button
                onClick={() =>
                  navigate("/home/creategroup", { state: group._id })
                }
              >
                Edit
              </button>
            )}

            { (group.groupcreator == user._id) || user.isAdmin ? (
              <>
                <button
                  onClick={() =>
                    navigate("/home/createPost", { state: group._id })
                  }
                >
                  Create
                </button>
              </>
            ) : (
              <button onClick={ () => joinOrLeaveGroup(group._id) }>
                 {memberState}
              </button>
            )}
            <button onClick={() => navigate("/home/groupmembers", { state: group._id })} >members</button>
          </div>
          <div className="group_info">
            <p>
              <i className="fa fa-user" aria-hidden="true"></i>Created
                {' '} {timeAgo(new Date(group.createdAt))}
            </p>
            <p>
              {" "}
              <i className="fa fa-user"></i> last edited{" "}
              {timeAgo(new Date(group.updatedAt))}{" "}
            </p>
            <p onClick={() => navigate("/home/mygroup")}>
              {" "}
              <i className="fa fa-users"></i>
              {group.groupVisibility ? "public" : "private"} group .
              {group.groupMembers.length} members
            </p>
            <p onClick={() => navigate("/home/friendrequest")}>
              {" "}
              <i className="fa fa-user-plus"></i>group request
            </p>
          </div>
          <div className="group_pagination">
            <strong ref={moveToGroupPostButton} className="pagination_underline" onClick={moveToGroupPost}>Group post</strong>
            <strong ref={moveToGaleryButton}  onClick={moveToGalery}>Galery</strong>
          </div>
          <div className="groupContainer">
            <div className="group_slide" ref={groupslideEle}>
              <div className="all_post" ref={allPostEle}>
                {postLoading ? (
                  <ThreeDots color="grey" />
                ) : (
                  posts.reverse().map((post) => {
                    return (
                      <div
                        key={post._id}
                        onClick={() => navigate(`/home/post/${post._id}`)}
                      >
                        <Post {...post} />
                      </div>
                    );
                  })
                )}
              </div>
              <div ref={gallerySliderEle}>
                   {/* all galary */}
                   <PhotoSlide fileList={groupGalery}/>
                </div>
              <div>all members</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupPage;
