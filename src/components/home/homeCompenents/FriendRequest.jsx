import { useNavigate } from "react-router-dom";

const FriendRequest = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="FriendRequestContainer">
        <nav> <i className=" fa fa-arrow-left" onClick={() => navigate(-1)}></i> 
           <input type="search" placeholder="find friend" />
        </nav>
        <div className="friendList">

          <article className="FriendCard">
            <span id="date">just now</span>
            <img src="" className="friendImg" alt="" />
            <div className="acceptDeclineDiv">
              <strong>Dilan Besong</strong>
              <p>2 mutual friends</p>
              <div className="acceptDeclineButtons">
                <button>Decline</button>
                <button className="acceptFriend">Accept</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
