import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { mutualArray } from "./mutalAray";

const GroupMembers = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(sessionStorage.getItem("user")).user._id;
  const user = JSON.parse(sessionStorage.getItem('user')).user
  const { state } = useLocation(); // This is the group Id
  const [groupMembers, setGroupMembers] = useState([]);
  const [group, setGroup] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  async function getGroupMembers() {
    
    const { data } = await axios.get(`/api/group/getALLGroupMembers/${state}`);
  
    if (data.groupMembers) {
      setGroupMembers(data.groupMembers)
      setLoading(false);
      return;
    }
    // if (data.groupMembers) {
    //   setLoading(false);
    //   setGroupMembers(data.groupMembers);
    //   return;
    // }
  }
  async function getGroup() {
    const { data } = await axios.get(`/api/getGroup/${state}`);
    if (data.groupName) {
      setGroup(data);
      getGroupMembers();
    }
  }
  useEffect(() => {
    getGroup();
  }, []);

  const removeGroupMember = async (memberId) => {
    const isDeleteMember = confirm(
      "Are you sure you want to remove this member ?"
    );
    if (isDeleteMember) {
      const { data } = await axios.delete(
        `/api/group/deleteOneMember/${memberId}`
      );
      if (data.length) {
        setGroupMembers((groupMembers) => {
          return groupMembers.filter((member) => member._id !== memberId);
        });
      }
    }
  };

  return (
    <div className="groupMembersSection">
      <nav className="search_nav">
        <div>
          <h4>Find Member</h4>
        </div>
        <div>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="search"
            name="search"
            autoComplete="off"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="find group member"
          />
        </div>
      </nav>
      <div className="allGroupMembers">
        {loading ? (
         <div className="centerLoad"> <Circles color="brown"/></div>
        ) : (
          groupMembers.map((member) => {
            return (
              <article id="friendCard" key={member._id}>
                <img
                  src={member.profileImage}
                  className="friendImg"
                  alt=""
                  onClick={() =>
                    navigate("/home/profile", { state: member._id })
                  }
                />
                <div className="friendCardInfo">
                  <strong>{member.username}</strong>
                  <p> { mutualArray(user.FriendList, member.FriendList )} mutual friends</p>
                </div>
                <div className="friendCardButton">
                  {group.groupcreator == userId && (
                    <button
                      value={member._id}
                      onClick={() => removeGroupMember(member._id)}
                    >
                      remove
                    </button>
                  )}
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GroupMembers;
