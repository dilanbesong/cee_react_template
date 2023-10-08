import { useRef,  axios } from "react"


const MiddleSide = ( { children }) => {
  const middleSideEle = useRef()


   return <>
      <section  className="middle_side" id="middle">

          {children}
          
           {/* <div className="All_posts" id="All_posts">
            <header className="status_section">
              <strong>Status</strong>
              <div className="all_status">
                <div className="status_card" data-level="+"></div>
                <div className="status_card" data-level="100lv"></div>
                <div className="status_card" data-level="200lv"></div>
                <div className="status_card" data-level="300lv"></div>
                <div className="status_card" data-level="400lv"></div>
                <div className="status_card" data-level="500lv"></div>
              </div>
              <div className="add_post">
                <div><img src="esutlogo.jpg" alt="esutlogo" /></div>
                <div>
                  <input
                    type="search"
                    placeholder="Catergorically search or use keyword"
                  />
                </div>
                <div>
                  <select name="" id="">
                    <option value="100">100l</option>
                    <option value="200">200l</option>
                    <option value="300">300l</option>
                    <option value="400">400l</option>
                    <option value="500">500l</option>
                  </select>
                </div>
              </div>
            </header>
            <section className="all_post">
              <article className="postCard">
                <div className="suggestions">
                    <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>3k mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article>  

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>1 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 

                     <article className="sugg_card">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                           <p>1 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                    </article> 
                    
                </div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid">
                      <div>1</div>
                      <div>2</div>
                  </div>

                 <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>

                </div>
              </article>

               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_3">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>
               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                       <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                  <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>


               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_3">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>

               <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>
            </section>
          </div>  */}
 












        {/* <div className="View_profile" id="View_profile">
             <div className="profile_header">
                 <div className="background_profile">
                    <p className="profile_img">
                      <img src="esutlogo.jpg" alt="user_profile.jpg"/>
                      <i className="fa fa-camera" aria-hidden="true"></i>
                    </p>
                 </div>
              </div>
                <div className="user_name">
                     <strong>Dilan Besong</strong>
                     <p>besongdilan@gmail.com</p>
                 </div>
                 <div className="checkup_btn">
                    <button>add</button>
                    <button>edit &#9998</button>
                    <button> local <i className="fa fa-map-marker" aria-hidden="true"></i> </button>
                 </div>
                 <ul className="info_list">
                   <li><i className="fa fa-code" aria-hidden="true"></i> Reg No 2019030187292</li>
                   <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Department of computer engineering</li>
                   <li><i className="fa fa-users" aria-hidden="true"></i>My Friends</li>
                 </ul>
                 <div className="profile_pagination">
                   <span className="span_underline">Post</span>
                   <span>Receipts</span>
                 </div>


     <div className="all_posts">
          <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>

              <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>
                </div>
              </article>
         </div>

     </div>   */}






















    {/* <div className="View_friends">
    
            <div className="Friend_chat">
              <nav className="friend_nav">
                <p>
                    <img src="esutlogo.jpg" alt="esutlogo"/>
                    <span>Dilan</span>
                </p>
                <p>typing...</p>

                <p> <input type="search" placeholder="Search chat &#x1f50E..."/> </p>
              </nav>
              <div className="all_chats">
                  
               <article className="msg_container">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid"> 
                    <a href="https://www.google.com">https://www.google.com</a>
                  </div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article>

                <article className="msg_container msg_container_right">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid">Whats happening here</div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article> 
               
               <article className="msg_container">
                  <img src="esutlogo.jpg" alt="user_name"/>
                  <div className="msg_grid">hello how are you hope are doing very well</div>
                  <span className="date">Tuesday 7:30pm 2022</span>
               </article>
            </div>

              <div className="msg_input_control">
                <span><input type="search" id="messageInput" placeholder="type message ..."/></span>
                <span id="voice_mail"><i className=" fa fa-microphone" aria-hidden="true"></i></span>
                <span id="sendmsgBtn"><i className=" fa fa-paper-plane" aria-hidden="true"></i></span>
              </div>
            </div> 





        <div className="Friend_list">
               <header className="friendList_nav">
                  <div>
                    <i className="fa fa-search"></i>
                     <input type="search" placeholder="find friend to chat with"/>
                  </div>
               </header>
              <div className="chatList">
                 <article className="friendCard">
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

                  <article className="friendCard">
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

                  <article className="friendCard">
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
             
         </div>  */}
















           {/* <div className="See_notification" id="See_notification">
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
          </div>  */}

















          {/* <div className="Make_payments" id="Make_payments">
             <form className="payment_card"> 
              <h3>Pay Departmental fees</h3>      
                <p> 
                  <label htmlFor="">Username:</label>
                  <input type="text" readOnly value="Dilan Besong"/>
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </p>
                
                <p> 
                  <label htmlFor="">Reg number</label>
                  <input type="text" readOnly value="2019030187292"/>
                   <i className="fa fa-code" aria-hidden="true"></i>
                </p>
                
                <p>
                  <label htmlFor="">Email</label>
                  <input type="text" readOnly  value="besongdilan@gmail.com"/>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </p>
                
                <p>
                  <label htmlFor="">Amount</label>
                  <input type="text" readOnly  value="5400"/>
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                </p>
              
                 <p>
                    <label htmlFor="">choose level</label>
                   <select name="" id="" required>
                   <option value="100"> 100 level </option>
                   <option value="200"> 200 level </option>
                   <option value="300"> 300 level </option>
                   <option value="400"> 400 level </option>
                   <option value="500"> 500 level </option>
                </select>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                 </p>
               <p> <button>submit</button></p>
              </form>
          </div>  */}




















          {/* <div className="See_post">

             <article className="postCard">
                <div className="suggestions">suggestions</div>
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                     <div className="username_and_date"> 
                       <span>@ DilanBesong</span>
                       <span>8 march</span> 
                    </div>
                     
                    </div>
                    <div>
                      <ul className="modify_post">
                         <li>Edit</li>
                         <li>Delete</li>
                      </ul>
                    </div>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1 showOneFile">
                      <div style={{height:'400px'}} >1</div>
                      <div style={{height:'400px'}}>2</div>
                      <div style={{height:'400px'}}>3</div>
                  </div>
                  <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i class="fa fa-heart" aria-hidden="true"></i> Love 100K</span>
                   <span><i class="fa fa-comment" aria-hidden="true"></i> Comment</span>
                   <span> <i class="fa fa-eye" aria-hidden="true"></i> 100k views </span>
                 </section>
                 <section className="post_comments">
                     <div className="main_comment_form">
                        <textarea name="" id="" cols="30" rows="10" placeholder="type..."></textarea>
                        <button>comment</button>
                     </div>
                     <div className="all_comments">
                         <article className="comment_card">
                           <div className="comment_header">
                              <img src="esutlogo.jpg" alt="esutlogo"/>
                              <span>@Dilan</span>
                           </div>
                           <div className="comment_body">
                              <p>Hello this is my comment</p>
                             <div className="reactions">
                               <span>Reply</span>
                               <span>Edit</span>
                               <span>Delete</span>
                               <span>Like 100k</span>
                             </div>
                             <div className="reactions">
                               <span>save</span>
                               <span>cancel</span>
                             </div>
                           </div>
                           <div className="main_comment_form">
                                <textarea name="" id="" cols="30" rows="10" placeholder="reply..."></textarea>
                                <button>comment</button>
                           </div>
                         </article>


                       <article className="comment_card">
                           <div className="comment_header">
                              <img src="esutlogo.jpg" alt="esutlogo"/>
                              <span>@Dilan</span>
                           </div>
                           <div className="comment_body">
                              <p>Hello this is my comment</p>
                             <div className="reactions">
                               <span>Reply</span>
                               <span>Edit</span>
                               <span>Delete</span>
                               <span><i class="fa fa-heart" aria-hidden="true"></i> Like 100k</span>
                             </div>
                             <div className="reactions">
                               <span>save</span>
                               <span>cancel</span>
                             </div>
                           </div>
                           <div className="main_comment_form">
                                <textarea name="" id="" cols="30" rows="10" placeholder="reply..."></textarea>
                                <button>comment</button>
                           </div>
                         </article>

                     </div>
                 </section>
                </div>
              </article>
          </div>  */}








        {/* <div className="Create_post">
            <form className="createPost" autocomplete="off">
                 <h3>Create Post</h3>
                 <div className="poster_profile">
                    <img src="esutlogo.jpg" alt="esutlogo"/>
                      <div>
                         <span>Dilan Besong</span>
                         <select id="data-list">
                            <option   value="public">public</option>
                            <option value="private">private</option>
                            <option value="status">status</option>
                         </select>
                      </div>
                 </div>
                 <textarea 
                  maxlength="500"
                  placeholder="Enter text or paste link"></textarea>
                  <div className="choose_file">
                     <input type="file" id="file"/>
                      <label htmlFor="file">Upload &#128462</label>
                      <input readOnly type="text" value="50"/>
                  </div>
                  <button type="button">Preview &#9113</button>
                </form>


           <article className="postCard">
                <div className="mainCard">
                  <header className="cardheader">
                    <div className="user_info">
                      <img src="esutlogo.jpg" alt="esutlogo" />
                      <span>@DilanBesong</span>
                    </div>
                    <span className="x-close">&times;</span>
                  </header>
                  <p id="postText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis mollitia modi fuga assumenda, omnis rerum dicta nam
                    aspernatur blanditiis? Laborum eum placeat molestiae magnam
                    quos praesentium in ex, eos facilis.
                  </p>
                  <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div>
                <div className="number_of_comments">0 Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" arial-hidden></i> Love 0k</span>
                   <span><i className="fa fa-comment" arial-hidden></i> Comment</span>
                   <span> <i className="fa eye" arial-hidden></i> 0 views </span>
                 </section>
                </div>
              </article>
        </div>  */}
        










         {/* <div className="Update_profile">
             <div className="update_list">

                <p className="profile_info">
                   <img src="esutlogo.jpg" alt="esutlogo"/>
                </p>

                 <p>
                   <span>Username :</span> 
                   <input type="text" value="Dilan Besong"/>
                   <i className=" fa fa-user-o" aria-hidden="true"></i>
                  </p>

                 <p>
                   <span >Email address :</span> 
                   <input type="email" value="besongdilan@gmail.com"/>
                   <i className="fa fa-envelope" aria-hidden="true"></i>
                  </p>

                <p>
                   <span>Reg number :</span> 
                   <input type="text" value="2019030187292"/>
                   <i className="fa fa-code" aria-hidden="true"></i>
                  </p>

                 <p>
                   <span>Background profile :</span> 
                   <input  type="file" id="file"/> 
                   <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </p>

                <p>
                  <span>Profile picture :</span>
                   <input  type="file" id="file"/> 
                  <i className="fa fa-file-image-o" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Student Level :</span> 
                  <input type="text" readOnly value="500"/>
                   <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Phone Number :</span> 
                  <input type="tel" value="0706872214"/> 
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Nickname :</span> 
                  <input type="text" value="@DilanBesong"/>
                  <i className=" fa fa-user-md" aria-hidden="true"></i>
                </p>

                <p><button>Edit &#9998</button></p>
             </div>   
        </div>  */}


















       {/* <div className="Img_map">
          <span><i className="fa fa-map-marker" aria-hidden="true"></i> CEE local</span>
           <div id="esut_map">esut map</div>
           <span><i className="fa fa-photo" aria-hidden="true"></i> CEE Gallery</span>
           <section className="imageContent">
             <button className="btn_left"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
             <button className="btn_right"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
               <div className="imgSlider">
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
               </div>
           </section>
        </div>  */}











         {/* <div className="View_search">
            <nav className="search_nav">
              <p> <h4>Find friends</h4> </p>
              <p> 
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="search" placeholder="find classmates/friends"/>
               </p>
              </nav>
              <div className="searchList">

                 <article className="sugg_card card_width">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>
                              Friends <i className="fa fa-user" aria-hidden="true"></i>
                             </button>
                         </div>
                  </article> 

                   <article className="sugg_card card_width">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                  </article> 
                   <article className="sugg_card card_width">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                  </article> 
                   <article className="sugg_card card_width">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>
                              Friends <i className="fa fa-user" aria-hidden="true"></i>
                             </button>
                         </div>
                  </article> 

                   <article className="sugg_card card_width">
                        <div className="sugg_img">
                           <img src="esutlogo.jpg" alt="esutlogo"/>
                           <p>Dilan Besong</p>
                            <p>2 mutual mates</p>
                        </div>
                         <div className="sugg_btns">
                            <button>Accept</button>
                            <button>Decline</button>
                         </div>
                  </article> 

              </div>
        </div>  */}
      </section>
   </>               
}
export default MiddleSide