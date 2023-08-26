const Notifications = () => {
   return <>
        <div className="See_notification" id="See_notification">
             <nav className="notify_nav">
               <h4> <i className="fa fa-bell" aria-hidden="true"></i> Notifications </h4>
              <p><input type="search" placeholder="find info notification..."/></p>
             </nav>
             <div className="all_notifications">
                 <article className="notify_card not_open">
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
                          laboriosam iure corrupti vero adipisci. Provident mollitia.
                         </p>
                    </div>
                    <span className="timeAgo">just now</span>
                 </article>

                   <article className="notify_card">
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
                 </article>

                 
             </div>
          </div> 
   </>
}

export default Notifications