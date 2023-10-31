import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { mutualArray } from "./mutalAray";
import { BASEURL } from "../../../baseUrl";
const FriendRequest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [friendRequestList, setFriendRequestList] = useState([]);
  const user = JSON.parse(sessionStorage.getItem('user')).user
  async function getFriendRequest() {
  
    const { data } = await axios.get(`${BASEURL}/myFriendRequest/${user._id}`);
      
    if (data.friendRequest) {
      setFriendRequestList(data.friendRequest);
      setLoading(false);
    }
  }
  useEffect(() => {
    getFriendRequest();
  }, []);

  const acceptFriendRequest = async (friendId) => {
    
     const { data } = await axios.put(`${BASEURL}/acceptOneFriendRequest`, { friendId, myId: user._id })
     if(data.friendId){
        alert('You are now friends...')
         setFriendRequestList(friendRequestList => {
        return friendRequestList.filter( requester => requester._id !== data.friendId)
      })
       return
     }
     alert(data.err)
  }

  const rejectFriendRequest = async (friendId) => {
     const { data } = await axios.put(`${BASEURL}/rejectOneFriendRequest`, { friendId, myId:user._id })
     
     if(data.friendId){
      const IsConfirm = confirm('Do you want to cancel this friend request ?')
      if(IsConfirm){
         setFriendRequestList(friendRequestList => {
        return friendRequestList.filter( requester => requester._id !== data.friendId)
       })
      }
       return friendRequestList
     }

  }
  return (
    <>
      <div className="FriendRequestContainer">
        <nav>
          {" "}
          <i className=" fa fa-arrow-left" onClick={() => navigate(-1)}></i>
          <input type="search" placeholder="find friend" />
        </nav>
        <div className="friendList">
          {loading ? (
            <div className="centerLoad">
              <ThreeCircles color="brown" />
            </div>
          ) : (
            friendRequestList.map((requester) => {
              return (
                <article key={requester._id} className="FriendCard">
                  <span id="date">just now</span>
                  <img
                    src={requester.profileImage}
                    className="friendImg"
                    alt=""
                    onClick={() => navigate('/home/profile', { state: requester._id })}
                  />
                  <div className="acceptDeclineDiv">
                    <strong>{requester.username}</strong>
                    <p>{mutualArray(user.FriendList, requester.FriendList)} mutual friends</p>
                    <div className="acceptDeclineButtons">
                      <button onClick={() => rejectFriendRequest(requester._id) }>Decline</button>
                      <button className="acceptFriend" onClick={() => acceptFriendRequest(requester._id) }>Accept</button>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
