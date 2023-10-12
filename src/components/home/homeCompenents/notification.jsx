import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ThreeDots, ThreeCircles } from "react-loader-spinner";
import io from "socket.io-client";
import { timeAgo } from "./createPost";
import { usePoster } from "../usePoster";
import toast, { Toaster } from "react-hot-toast";
//const socket = io.connect( "https://cee-info.onrender.com" || "http://localhost:5000" );


const Notifications = () => {
   const navigate = useNavigate()
   const [ loading, setLoading ] = useState(true)
   const [notificationlist, setNotificationList ] = useState([])
   const [ searchInput, setSearchInput ] = useState('')
   const userId = JSON.parse(sessionStorage.getItem('user')).user._id

   
   async function getNotifications(){
     const { data } = await axios.get(`/api/getNotification/${userId}`)
     console.log(data);
     if(data.NotificationList){
      setLoading(false)
      setNotificationList(data.NotificationList)
      return
     }
      return
   }

   async function searchNotifications(){
     const { data } = await axios.get(`/api/searchNotifications/${searchInput}`)
     if(data.notificationResults){
       setLoading(false)
       setNotificationList(data.notificationResults)
       return
     }
     toast.error(data.error)
   }

   useEffect( () => {
        searchNotifications()
   },[searchInput])

   useEffect( () => {
      getNotifications()
   },[])

   const removeOneNotification = async (notificationId) => {
      
      const IsConfirm = confirm('Do you really want to delete this notification ... ?')
      if(IsConfirm){
        const { data } = await axios.put(`/api/deleteOneNotification`, { notificationId, userId } )
         
        if(data.notificationId){
         
          setNotificationList( notificationlist => {
            return notificationlist.filter( notification => notification._id !== data.notificationId )
          })
          toast.success('successfully deleted!')
          return
        }
        toast.error(data.error)
      }
      return
   }

   const clearAllNotifications = async () => {
      const IsConfirm = confirm('Do you really want to clear all notification ... ?')
      if(IsConfirm){
         const { data } = await axios.delete(`/api/clearAllNotifications/${userId}`)
         
         if(data.Notifications){
            setNotificationList([])
            return
         }
         toast.error(data.error)
      } 
      return
   }
   const NotificationCard = ( { _id,  message, notificatorId, isView,  redirectUrl, createdAt }) => {
       const  { posterImage, posterName, showPoster } = usePoster(notificatorId)
       return  <article key={_id} className={ `notify_card ${ (isView==false) && 'not_open' } `}>
                    <header className="notify_header">
                       <div>
                          <img src={ showPoster && posterImage} alt={ showPoster && posterImage} onClick={() => navigate(redirectUrl)} />
                          <span>{ showPoster && posterName } </span>
                       </div>
                       <span className="x-close" onClick={ () => removeOneNotification(_id)}>&times;</span>
                    </header>
                    <div className="content">
                       <strong><i className="fa fa-bell" aria-hidden="true"></i></strong>
                       <p>{message} </p>
                    </div>
                    <span className="timeAgo">{timeAgo( new Date(createdAt ))}</span>
                 </article>
   }
   return <>
        <div className="See_notification" id="See_notification">
             <nav className="notify_nav">
               <h4> <i className="fa fa-bell" aria-hidden="true"></i> Notifications </h4>
              <p><input type="search" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="find info notification..."/></p>
              <i className="fa fa-trash" onClick={() => clearAllNotifications()}></i>
             </nav>
             <div className="all_notifications">
                 { loading ? <div className="centerLoad"> <ThreeDots color='brown'/></div> : notificationlist.map( notify => {
                     return <NotificationCard {...notify}/>
                 })}

                   {/* <article className="notify_card">
                    <header className="notify_header">
                       <div>
                          <img src="esutlogo.jpg" alt="esutlogo"/>
                          <span>Esut!!</span>
                       </div>
                       <span className="x-close">&times;</span>
                    </header>
                    <div className="content">
                       <strong><i className="fa fa-bell" aria-hidden="true"></i></strong>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Accusantium mollitia totam culpa voluptatibus qui suscipit natus esse,
                          laboriosam iure corrupti vero adipisci. Provident mollitia, 
                        </p>
                    </div>
                    <span className="timeAgo">just now</span>
                 </article> */}

                 
             </div>
          </div> 
          <Toaster/>
   </>
}

export default Notifications