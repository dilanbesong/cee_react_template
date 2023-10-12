import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";
import { mutualArray } from "./mutalAray";

const SentFriendRequest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sentFriendRequestList, setSentFriendRequestList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const user = JSON.parse(sessionStorage.getItem('user')).user

  async function cancelOneSentFriendRequest(friendId) {
    const { data } = await axios.put("/api/cancelOneSentFriendRequest", {
      friendId,
    });
    if (data.friendId) {
      setSentFriendRequestList((sentFriendRequestList) => {
        const IsConfirm = confirm('Are you sure want to delete this request')
        if(IsConfirm){
             return sentFriendRequestList.filter(
            (request) => request._id !== data.friendId
           );
        }
        return sentFriendRequestList
        
      });
      return;
    }
  }
  async function getSentFriendRequest() {
    const { data } = await axios.get(`/api/getAllmySentFriendRequest/${user._id}`);
    if (data.SentFriendRequestList) {
      setLoading(false);
      setSentFriendRequestList(data.SentFriendRequestList);
    }
  }
  useEffect(() => {
    getSentFriendRequest();
  }, []);

  return (
    <>
      <div className="sentFriendRequestSection">
        <nav className="search_nav">
          <div>
            <h4>Sent Request</h4>
          </div>
          <div>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              name="search"
              autoComplete="off"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="find friend"
            />
          </div>
        </nav>
        <div className="allSentRequest">
          {loading ? (
            <div className="centerLoad">
              <ThreeCircles color="brown" />
            </div>
          ) : (
            sentFriendRequestList.map((request) => {
              return (
                <article key={request._id} id="friendCard">
                  <img
                    src={request.profileImage}
                    onClick={() => navigate(`/home/profile/${request._id}`)}
                    className="friendImg"
                    alt=""
                  />
                  <div className="friendCardInfo">
                    <strong>{request.username}</strong>
                    <p> {mutualArray(user.FriendList, requester.FriendList)} mutual friends </p>
                  </div>
                  <div className="friendCardButton">
                    <button
                      onClick={() => cancelOneSentFriendRequest(request._id)}
                    >
                      {" "}
                      cancel
                    </button>
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

export default SentFriendRequest;
