import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import { usePoster } from "../usePoster";
import { BASEURL } from "../../../baseUrl";

const FriendChat = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [friendList, setFriendList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const user = JSON.parse(sessionStorage.getItem('user')).user
  async function getFriends() {
    const { data } = await axios.get(`${BASEURL}/chat/displayChatlist/${user._id}`);
    
    if (data.ChatList) {
      setLoading(false);
      setFriendList(data.ChatList);
      return
    }
  }

  function handleSearch(){
      const searchResults = friendList.filter( ({ username, regNumber}) => {
        return username.toLowerCase().includes(searchInput.toLowerCase()) || regNumber.includes(searchInput)
      })
      setFriendList(searchResults)
  }

  

  useEffect(() => { handleSearch() }, [searchInput]);
  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      <div className="View_friends">
        <div className="Friend_list">
          <header className="friendList_nav">
            <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
            <div>
              <i className="fa fa-search"></i>
              <input
                type="search"
                value={searchInput}
                onInput={(e) => setSearchInput(e.target.value)}
                placeholder="search friend to chat ..."
              />
            </div>
          </header>
          <div className="chatList">
            {loading ? (
              <div className="centerLoad">
                <ThreeCircles color="grey" />
              </div>
            ) : (
              friendList.map((friend) => {
                return (
                  <article
                    key={friend._id}
                    className="friendCard"
                    onClick={() =>
                      navigate("/home/chat", { state: friend._id })
                    }
                  >
                    <div className="friendProfile">
                      <img src={friend.profileImage} alt="esutlogo" />
                      <div className="name_msg">
                        <span>{friend.username}</span>
                        <span style={{color:'grey'}}>{friend.regNumber}</span>
                      </div>
                    </div>
                    <div className="timer_new_msg">
                      {/* <span>7:30am</span> */}
                      <span className="new_msg_dot"></span>
                    </div>
                  </article>
                );
              })
            )}

            {/* <article className="friendCard" onClick={() => navigate('/home/chat', { state: '2'})}>
                     <div className="friendProfile">
                         <img src="esutlogo.jpg" alt="esutlogo"/>
                         <div className="name_msg">
                             <span>Dilan Tekoh</span>
                             <span>Good morning everyone hope ...</span>
                         </div>
                     </div>
                     <div className="timer_new_msg">
                        <span>7:30am</span>
                        <span className="new_msg_dot"></span>
                     </div>
                 </article> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendChat;
