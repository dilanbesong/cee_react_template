import { useNavigate } from "react-router-dom";
import useSpeechToText from 'react-hook-speech-to-text';
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'
import Post from "./post";



const CreatePost = () => {
  const MAX_FILE_SIZE = 230
  const navigate = useNavigate();
  const [fileIndex, setFileIndex] = useState(0);
  const [post, setPost] = useState({ postStatus: "public", body: "", posterId:'', fileList: [] });
  const [disable, setDisble] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [fileblobs, setFileBlob] = useState([])
  const [showPost, setShowPost ] = useState(false)
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

 
  
  const handlePostPreview = (e) => {
        e.preventDefault()
        const selectedFiles = fileblobs
        const fileSize = selectedFiles.reduce((sizeInByte, file) => {
              return sizeInByte + file.size  
        }, 0)
        if( (fileSize/1024)/1024 > 1024 ){
          alert('Files must not be more than 1gb')
          console.log((fileSize/1024)/1024);
           setFileBlob([])
          return
        }

        const reader = new FileReader();

    function ReadMultipleFiles(fileIndex){
 
       if( fileIndex >= selectedFiles.length ){
    
           console.log(post);
           setFileBlob([])
           setFileIndex(0)
          //  setPost({...post, fileList:[]})
           setShowPost(true)
           return
        };
        let file = selectedFiles[fileIndex]
        reader.onload = function(e) {  
           post.fileList.push(e.target.result)
          ReadMultipleFiles(fileIndex + 1)
         }
        reader.readAsDataURL(file)
    }
    ReadMultipleFiles(fileIndex)
  };

  const handlePost = (e) => {
    const { name, value } = e.target;
      setPost({ ...post, [name]: value });
      
  };

  
 
  return (
    <>
      <div className="Create_post">
        <nav>
          <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
          Create new post <strong className="postButton">{ isEdit ? 'edit' : 'post'}</strong>
        </nav>
        <form className="createPost" autoComplete="off" onSubmit={ e => handlePostPreview(e)}>
          <h3>Create Post</h3>
          <div className="poster_profile">
            <img src="esutlogo.jpg" alt="esutlogo" />
            <div>
              <span>Dilan Besong</span>
              <select name="postStatus" onChange={handlePost}>
                <option value="public">public</option>
                <option value="private">private</option>
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
            <input readOnly type="text" value= {'500'} />
          </div>
          <button type="submit">
            { fileblobs.length > 0 ? `Preview` : 'Cleared' } <i className="fa fa-file"></i>
          </button>
        </form>
        <div className="clearFileAndRecord">
           <i className={ isRecording ? 'fa fa-microphone' : 'fa fa-microphone-slash' }
            onClick={isRecording ? stopSpeechToText : startSpeechToText}></i>
             <p>{ ...results }</p>
           <button onClick={() => setPost({...post, fileList:[]})}>clear files</button>
        </div>
          { showPost && <Post {...post} />}
      </div>
    </>
  );
};

export default CreatePost;
