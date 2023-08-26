
import { useLocation, useNavigate } from "react-router-dom"

const Chat = () => {
  const navigate = useNavigate()
  const { state} = useLocation()
  
   return <> 
       <div className="Friend_chat">
              <nav className="friend_nav">
                <i className="fa fa-arrow-left" aria-hidden onClick={() => navigate(-1)}></i>
                <p>
                    <img src="esutlogo.jpg" alt="esutlogo"/>
                    <span>Dilan</span>
                </p>
                <p>typing...</p>

                <p> <input type="search" placeholder="Search chat "/> </p>
              </nav>
              <div className="all_chats">
                  
               <article className="msg_container">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid"> 
                    <a href="https://www.google.com">https://www.google.com</a>
                  </div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article>

                <article className="msg_container msg_container_right">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid">Whats happening here</div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article> 
               
               <article className="msg_container">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid">hello how are you hope are doing very well</div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article>
            </div>

              <div className="msg_input_control">
                <span><input type="search" id="messageInput" placeholder="type message ..."/></span>
                <span id="voice_mail"><i className=" fa fa-microphone" aria-hidden="true"></i></span>
                <span id="sendmsgBtn"><i className=" fa fa-paper-plane" aria-hidden="true"></i></span>
              </div>
            </div> 
    </>               
}

export default Chat