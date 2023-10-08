import { useState, useEffect } from "react"
import axios from 'axios'
import { ThreeDots, ThreeCircles } from "react-loader-spinner";




const Notifications = () => {
   const [ loading, setLoading ] = useState(true)
   const [notificationlist, setNotificationList ] = useState([])
   const [ searchInput, setSearchInput ] = useState('')
   async function getNotifications(){
     const { data } = await axios.get('/api/getNotification')
     if(data.Notificationlist){
      setLoading(false)
      setNotificationList(data.Notificationlist)
      return
     }
      return
   }

   async function searchNotifications(searchInput){
     const { data } = await axios.get(`/api/searchNotifications/${searchInput}`)
     if(data.notificationResults){
       setLoading(false)
       setNotificationList(data.notificationResults)
       return
     }
     
   }
   useEffect( () => {
        searchNotifications(searchInput)
   },[searchInput])
   useEffect( () => {
      getNotifications()
   },[])

   const removeNotification = async (notifcationId) => {
      const IsConfirm = confirm('Do you really want to delete this notification ... ?')
      if(IsConfirm){
        const { data } = await axios.delete(`/api/deleteOneNotification/${notifcationId}`)
        if(data.NotificationList){
          setNotificationList(data.NotificationList)
          return
        }
      }
      return
   }

   const clearAllNotifications = () => {
      const IsConfirm = confirm('Do you really want to clear all notification ... ?')
      if(IsConfirm){
         
      } 
      return
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
                     return  <article className="notify_card not_open">
                    <header className="notify_header">
                       <div>
                          <img src="esutlogo.jpg" alt="esutlogo"/>
                          <span>Esut!!</span>
                       </div>
                       <span className="x-close" onClick={ () => removeNotification()}>&times;</span>
                    </header>
                    <div className="content">
                       <strong><i className="fa fa-bell" aria-hidden="true"></i></strong>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Accusantium mollitia totam culpa voluptatibus qui suscipit natus esse,
                          laboriosam iure corrupti vero adipisci. Provident mollitia.
                         </p>
                    </div>
                    <span className="timeAgo">just now</span>
                 </article>
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
   </>
}

export default Notifications