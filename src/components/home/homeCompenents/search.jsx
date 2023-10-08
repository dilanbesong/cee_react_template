import axios from "axios";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom'

const SearchPost = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults ] = useState([])
  const [isSearchLoading, setIsSearchLoading ] = useState(false)
  const navigate = useNavigate()

  const GroupCard = ( { _id, groupName, groupProfile }) => {
    return <>
         <article key={_id} className="searchcard" onClick={() => navigate(`/home/group/${_id}`)}>
            <div className="searchNameIconContainer">
              <i className="fa fa-search"></i>
              <span id='name'>{groupName}</span>
            </div>
            <div className="searchImageArrow">
              <small>group</small>
              <img src={groupProfile} alt="groupProfile.png" />
              <i className="fa fa-arrow-up"></i>
            </div>
          </article>
    </>
  }

  const StudentCard = ({ _id, username, profileImage, FriendList }) => {
    return <>
         <article key={ _id } className="searchcard" onClick={() => navigate('/home/profile', { state: _id })} >
            <div className="searchNameIconContainer">
              <i className="fa fa-search"></i>
              <span id='name'>{ username }</span>
            </div>
            <div className="searchImageArrow">
              <small>user</small>
              <img src={profileImage} alt="" />
              <i className="fa fa-arrow-up"></i>
            </div>
          </article>
      </>
  }
  async function getResults(){
     const { data } = await axios.get(`/api/post/searchGroupsAndFriends/${searchInput}`)
     setIsSearchLoading(true)
     if(data[0]){
       setIsSearchLoading(false)
       setSearchResults(data)
     }
  }
  useEffect(() => {
    getResults()
  },[searchInput])
  return (
    <>
      <div className="View_search">
        <nav className="search_nav">
          <div>
            {" "}
            <h4>Find</h4>{" "}
          </div>
          <div>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              name="search"
              autoComplete="off"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="find groups/friends"
            />
          </div>
        </nav>
        <div className="searchList">
          { 
          isSearchLoading ? <div className="centerLoad"> <Circles color="brown"/></div> :  searchResults.map( result => {
              if(result.groupName) return <GroupCard {...result}/>
              return <StudentCard {...result}/>
          })
          
          
          }
          

          {/* <article className="searchcard">
            <div className="searchNameIconContainer">
              <i className="fa fa-search"></i>
              <span id="name"> IEEE</span>
            </div>
            <div className="searchImageArrow">
              <small>group</small>
              <img src="" alt="" />
              <i className="fa fa-arrow-up"></i>
            </div>
          </article>

          <article className="searchcard">
            <div className="searchNameIconContainer">
              <i className="fa fa-search"></i>
              <span id="name">Paul Hermen</span>
            </div>
            <div className="searchImageArrow">
              <small>friend</small>
              <img src="" alt="" />
              <i className="fa fa-arrow-up"></i>
            </div>
          </article> */}
        </div>
      </div>
    </>
  );
};

export default SearchPost;
