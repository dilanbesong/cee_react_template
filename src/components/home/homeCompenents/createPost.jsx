import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSpeechToText from "react-hook-speech-to-text";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import toast, {Toaster} from 'react-hot-toast'


import Post from "./post";
import { useGlobalContext } from "../../../context";
import { usePoster } from "../usePoster";

export function timeAgo(value) {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(value).getTime()) / 1000
  );
  let interval = seconds / 31536000;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "year");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "month");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "day");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "hour");
  }
  interval = seconds / 60;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "minute");
  }
  return rtf.format(-Math.floor(interval), "second");
}

export function convertTime(sec) {
  let hours = Math.floor(sec / 3600);
  hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
  let min = Math.floor(sec / 60);
  min >= 1 ? (sec = sec - min * 60) : (min = "00");
  sec < 1 ? (sec = "00") : void 0;

  min.toString().length == 1 ? (min = "0" + min) : void 0;
  sec.toString().length == 1 ? (sec = "0" + sec) : void 0;

  return hours + ":" + min + ":" + sec;
}

const CreatePost = () => {
  const MAX_FILE_SIZE = 230;
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation()
  const [fileIndex, setFileIndex] = useState(0);
  const [student, setStudent] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const {
    user: { isAdmin, username, profileImage, _id },
  } = student;
  const [post, setPost] = useState({
    body: "",
    poster:'CEE',
    fileList: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    Likes:[],
    Comments:[],
    views:0
  });
  const [isEdit, setIsEdit] = useState(id ? true : false);
  const [fileblobs, setFileBlob] = useState([]);
  const [showPost, setShowPost] = useState(false);
  const [ isGroup, setIsGroup ] = useState( state ? true : false )
  





  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  //const { user: { isAdmin} } = useGlobalContext()







  const handlePostPreview = (e) => {
    e.preventDefault();
    const selectedFiles = fileblobs;
    const fileSize = selectedFiles.reduce((sizeInByte, file) => {
      return sizeInByte + file.size;
    }, 0);
    if (fileSize / 1024 / 1024 > 1024) {
      toast.error("Files must not be more than 1gb or 1024mb");
      setFileBlob([]);
      return;
    }



    const reader = new FileReader();

    function ReadMultipleFiles(fileIndex) {
      if (fileIndex >= selectedFiles.length) {
        console.log(post);
        setFileBlob([]);
        setFileIndex(0);
        setShowPost(true);
        return;
      }
      let file = selectedFiles[fileIndex];
      reader.onload = function (e) {
        post.fileList.push(e.target.result);
        ReadMultipleFiles(fileIndex + 1);
      };
      reader.readAsDataURL(file);
    }
    ReadMultipleFiles(fileIndex);
  };

  const handlePost = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };



 useEffect( () => {
    if(isGroup){
       setPost( post => {
         return {...post, poster:state } // setting the poster to the group ID
       })
    } 
 },[isGroup])

 
  const savePost = async () => {
    try {
         console.log(post);
      if (isEdit) {
        const { data } = await axios.put("/api/post/editPost", post);
        if (data.isEdit) toast.success("post successfully edited..", {
          duration:4000,
          style:{
            width:250,
            height:120
          }   
        });
        return;
      }

      const { data } = await axios.post("/api/post/createPost", post); // data is pointing to the post
      // await axios.post('/api/createNotification', { notificatorId:data.poster, postId:data._id } )
        // createNotification.isNotify
        console.log(data);
      if (data) {
         toast.success("post successfully created..", {
          duration:4000,
          style:{
            width:250,
            height:120
          }
        });
        return;
      }
    } catch (error) {
      toast.error(error.message)
    }
  };









  useEffect(() => {
    if (isEdit) {
      async function getPost() {
        const { data } = await axios.post(`/api/post/viewPost`, { postId: id });
        console.log(data);
        setPost({
          body: data.body,
          postId: id,
          poster: _id,
          fileList: data.fileList,
          Likes:data.Likes,
          Comments:data.Comments,
          views:data.views,
          createdAt: data.createdAt,
          updatedAt:data.updatedAt
        });
        setShowPost(true);
      }
      getPost();
      return;
    }
  },[]);

  const whoIsPosting = usePoster(state) // who is posting

  return (
    <>
      <div className="Create_post">
        <nav>
          <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
          Create new post{" "}
          <strong className="postButton" onClick={savePost}>
            {isEdit ? "edit" : "post"}
          </strong>
        </nav>
        <form
          className="createPost"
          autoComplete="off"
          onSubmit={(e) => handlePostPreview(e)}
        >
          <h3>Create Post</h3>
          <div className="poster_profile">
            <img src={profileImage} alt="user_profile" />
            <div>
              <span>{username}</span>
              <select name="poster" onChange={handlePost}>
                {isAdmin && <option value="CEE">CEE</option>}
                {isAdmin && <option value="user">user</option>}
              </select>
            </div>
          </div>
          <textarea
            maxLength="500"
            placeholder="Enter text or paste link"
            name="body"
            value={post.body}
            onChange={handlePost}
            required
          ></textarea>
          <div className="choose_file">
            <input
              type="file"
              id="file"
              onChange={(e) => setFileBlob(Array.from(e.target.files))}
              name="fileList"
              multiple
            />
            <label htmlFor="file">
              Upload <i className="fa fa-upload"></i>
            </label>
            <input readOnly type="text" value={"500"} />
          </div>
          <button type="submit">
            {fileblobs.length > 0 ? `Preview` : "Cleared"}{" "}
            <i className="fa fa-file"></i>
          </button>
        </form>
        <div className="clearFileAndRecord">
          <i
            className={
              isRecording ? "fa fa-microphone" : "fa fa-microphone-slash"
            }
            onClick={isRecording ? stopSpeechToText : startSpeechToText}
          ></i>
          <p>{...results}</p>
          <button onClick={() => setPost({ ...post, fileList: [] })}>
            clear files
          </button>
        </div>
        {showPost && <Post {...post} postIndex={-1} postSize={0} />}
      </div>
      <Toaster/>
    </>
  );
};

export default CreatePost;
