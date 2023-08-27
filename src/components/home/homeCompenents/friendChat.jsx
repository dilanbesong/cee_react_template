import { Link, useNavigate } from "react-router-dom"


const FriendChat = () => {
    const navigate = useNavigate()
  
    return <>
       <div className="View_friends">
    
        <div className="Friend_list">
               <header className="friendList_nav">
                   <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
                  <div>
                    <i className="fa fa-search"></i>
                     <input type="search" placeholder="search friend to chat ..."/>
                  </div>
               </header>
              <div className="chatList">
                
                 <article className="friendCard" onClick={() => navigate('/home/chat', { state: '0'})}>
                     <div className="friendProfile">
                         <img src="esutlogo.jpg" alt="esutlogo"/>
                         <div className="name_msg">
                             <span>Dilan Besong </span>
                             <span>Good morning everyone hope ...</span>
                         </div>
                     </div>
                     <div className="timer_new_msg">
                        <span>7:30am</span>
                        <span className="new_msg_dot"></span>
                     </div>
                 </article>
                

                 
                  <article className="friendCard" onClick={() => navigate('/home/chat', { state: '1'})}>
                     
                        <div className="friendProfile">
                         <img src="esutlogo.jpg" alt="esutlogo"/>
                         <div className="name_msg">
                             <span>Dilan Besong Tekoh</span>
                             <span>Good morning everyone hope ...</span>
                         </div>
                     </div>
                     <div className="timer_new_msg">
                        <span>7:30am</span>
                        <span className="new_msg_dot"></span>
                     </div>
                     
                 </article>
                 
                 
                  <article className="friendCard" onClick={() => navigate('/home/chat', { state: '2'})}>
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
                 </article>
                 
              </div>
            </div>
             
         </div> 
    </>              
}

export default FriendChat