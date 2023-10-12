import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ThreeCircles } from 'react-loader-spinner'
import {  mutualArray } from './mutalAray'
const FriendList = () => {
   const navigate = useNavigate()
   const [friendList, setFriendList ] = useState([])
   const [loading, setLoading] = useState(true)
    const user = JSON.parse(sessionStorage.getItem('user')).user
   async function getMyFriends(){
      const { data } = await axios.get(`/api/friends/${user._id}`)
      if(data.Friends){
         setLoading(false)
         setFriendList(data.Friends)
      }
   }
   useEffect( () =>{
     getMyFriends()
   }, [])

   const removeFriend = async (friendId) => {
      const { data } = await axios.delete(`/api/deleteOneFriend/${friendId}`)
      if(data.Friends){
         setFriendList( friendList => {
            return friendList.filter( friend =>  friend._id !== friendId)
         })
      }
   }
   
    return <>
      <div className="FriendListSection">
          <nav> 
            <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
             <div className="searchControl"> <i className="fa fa-search" aria-hidden></i> 
               <input type="search" placeholder="find friend ..." />
            </div>
           </nav>
           <div className="FriendList">
                  { loading ? <div className="centerLoad">
              <ThreeCircles color="brown" />
            </div> : friendList.map( friend => {
                return <article key={friend._id} id="friendCard">
                     <img src={friend.profileImage} onClick={() => navigate('/home/profile', { state: friend._id })} className="friendImg" alt="" /> 
                      <div className="friendCardInfo"> 
                         <strong>{friend.username}</strong>
                         <p> { mutualArray(user.FriendList, friend.FriendList )} mutual friends</p>
                      </div>
                      <div className="friendCardButton">
                           <button onClick={ () => removeFriend(friend._id)}> cancel</button>        
                      </div>
                  </article>
            })
                  }
           </div>
      </div>
    </>              
}

export default FriendList