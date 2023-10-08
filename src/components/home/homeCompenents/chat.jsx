import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { ThreeCircles } from "react-loader-spinner";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { usePoster } from "../usePoster";
import {  VoiceNote } from "./filegrid";
import { timeAgo, convertTime } from "./createPost";



const Chat = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // state here refers to the friendId
  const { showPoster, posterImage, posterName } = usePoster(state);
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingTime,
    recordingBlob,
    isRecording,
    isPaused,
    mediaRecorder,
  } = useAudioRecorder();

  const user = JSON.parse(sessionStorage.getItem("user")).user;

  const [textMessage, setTextMessage] = useState({
    _id: new Date().getTime().toString(),
    message: "",
    senderId: user._id,
    recieverId: state,
    timeStamps: new Date().toISOString(),
  });
  const [loading, setLoading] = useState(true);
  const [chatList, setChatList] = useState([]);
  const [searchChatInput, setSearchChatInput] = useState("");
  const [isSendtext, setIsSendText] = useState(false);

  const messageInputEle = useRef();

  function searchChat() {
    setChatList((chatList) => {
      return chatList.filter((chat) => {
        return chat.message
          .toLowerCase()
          .startsWith(searchChatInput.toLowerCase());
      });
    });
  }

  const sendTextMessage = async () => {
    if (textMessage.message == "") return;

    io.emit("send-message", textMessage);
    setIsSendText(!isSendtext);
    setChatList((chatList) => {
      return [...chatList, textMessage];
    });
    setTimeout(() => (messageInputEle.current.value = ""), 100);

    const { data } = await axios.post("/api/chat/saveChat", textMessage);
  };

  const sendVoiceNote = () => {
   
    const reader = new FileReader();
  
    reader.addEventListener("loadend", (e) => {
      let note = e.currentTarget.result;
      setTextMessage({ ...textMessage, message: note });
      setChatList( chatList => {
        return [...chatList, textMessage]
      })
    });
    
     reader.readAsDataURL(recordingBlob);
  
      stopRecording();
      setTextMessage({ ...textMessage, message: '' });
    setTimeout(() => (messageInputEle.current.value = ""), 100);
  };

  function renderChat(msg) {
    if (msg.includes("data:audio")) {
      return <audio src={msg} controls></audio>;
    }
    return msg;
  }

  async function getChats() {
    const { data } = await axios.get(`/api/chat/getChats/${state}/${user._id}`);

    if (data.Conversions) {
      setLoading(false);
      setChatList(data.Conversions);
      return;
    }
    alert(data.err);
  }

  async function deleteOneChat(messageId) {
    const isConfirm = confirm("Do you want to delete this message ?");
    if (isConfirm) {
      const { data } = await axios.put("/api/chat/deleteOneChat", {
        messageId,
        friendId: state,
        myId: user._id,
      });
      if (data.messageIndex) {
        setChatList((chatList) => {
          return chatList.filter(
            (msg, msgIndex) => msgIndex !== data.messageIndex
          );
        });
        return;
      }
      alert(data.err);
    }
  }

  async function clearAllChats() {
    const isConfirm = confirm("Are you sure you want to clear all chats ");
    if (isConfirm) {
      const { data } = await axios.put("/api/chat/clearChats", {
        friendId: state,
        myId: user._id,
      });
      if (data.isDelete) {
        setChatList([]);
        return;
      }
      alert(data.err);
    }
  }

  useEffect(() => {
    getChats();

    io.emit("active", { userId: user._id });
    io.on("recieve-message", (data) => {
      setChatList((chatList) => {
        return [...chatList, data];
      });
      setTextMessage({ ...textMessage, message: "" });
    });
  }, []);

  useEffect( () => {
     messageInputEle.current.value = ""
  },[isRecording])

  useEffect(() => {
    searchChat();
  }, [searchChatInput]);

  return (
    <>
      <div className="Friend_chat">
        <nav className="friend_nav">
          <i
            className="fa fa-arrow-left"
            aria-hidden
            onClick={() => navigate(-1)}
          ></i>
          <p>
            <img
              src={showPoster && posterImage}
              alt={showPoster && posterImage}
            />
            <span>{showPoster && posterName.substring(0, 10)}...</span>
          </p>
          {/* <p>typing...</p> */}
          <i className="fa fa-trash" onClick={clearAllChats}></i>
          <p>
            {" "}
            <input
              type="search"
              value={searchChatInput}
              onChange={(e) => setSearchChatInput(e.target.value)}
              placeholder="Search chat "
            />{" "}
          </p>
        </nav>
        <div className="all_chats">
          {loading ? (
            <div className="centerLoad">
              {" "}
              <ThreeCircles color="brown" />{" "}
            </div>
          ) : (
            chatList.map((chat, chatIndex) => {
              if (chat.senderId !== state) {
                // state is the friendId
                return (
                  <article
                    key={chat._id}
                    className="msg_container msg_container_right"
                    onDoubleClick={() => deleteOneChat(chat._id)}
                  >
                    <img src={user.profileImage} alt={user.profileImage} />
                    <div className="msg_grid">
                      {/* {renderChat(chat.message)} */}
                      {chat.message.includes('data:audio') ? <VoiceNote src={chat.message}backgroundColor={'#4b1f1f'}/> : chat.message }
                    </div>
                    <span className="date">{timeAgo(chat.timeStamps)}</span>
                  </article>
                );
              }
              return (
                <article
                  key={chat._id}
                  onDoubleClick={() => deleteOneChat(chat._id)}
                  className="msg_container"
                >
                  <img
                    src={showPoster && posterImage}
                    alt={showPoster && posterImage}
                  />
                  <div className="msg_grid">
                    {/* {renderChat(chat.message)} */}
                    {chat.message.includes('data:audio') ? <VoiceNote src={chat.message} backgroundColor={'white'}/> : chat.message }
                  </div>
                  <span className="date">{timeAgo(chat.timeStamps)}</span>
                </article>
              );
            })
          )}
        </div>

        <div className="msg_input_control">
          <span>
            <input
              type="search"
              id="messageInput"
              name="textmsg"
              value={textMessage.message}
              ref={messageInputEle}
              autoComplete="off"
              autoCorrect="on"
              onChange={(e) =>
                setTextMessage({ ...textMessage, message: e.target.value })
              }
              placeholder="type message ..."
            />
            {isRecording && (
              <div className="showRecorderCard">
                <span>{convertTime(recordingTime)}</span>

                <button onClick={stopRecording} style={{ color: "red" }}>
                  <i className="fa fa-trash"></i>
                </button>

                <button onClick={ togglePauseResume } style={{ color: "red" }}>
                  <i className={ isRecording ? 'fa fa-pause' : 'fa fa-play'} ></i>
                </button>

                <button onClick={sendVoiceNote}>
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            )}
          </span>
          {loading === false && (
            <>
              <span id="voice_mail" onClick={startRecording}>
                <i
                  className={
                    isRecording ? "fa fa-microphone" : "fa fa-microphone-slash"
                  }
                  aria-hidden="true"
                ></i>
              </span>
              <span id="sendmsgBtn" onClick={sendTextMessage}>
                <i className=" fa fa-paper-plane" aria-hidden="true"></i>
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
