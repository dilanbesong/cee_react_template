 import { useNavigate } from 'react-router-dom'
 
const Profile = () => {
  const navigate = useNavigate()
   return <>
       <div className="View_profile" id="View_profile">

        <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>Profile</nav>

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
                    <button onClick={() => navigate('/home/createPost')}>add</button>
                    <button onClick={() => navigate('/home/profileupdate')}>edit <i className="fa fa-edit"></i></button>
                    <button> local <i className="fa fa-map-marker" aria-hidden="true"></i> </button>
                 </div>
                 <ul className="info_list">
                   <li><i className="fa fa-code" aria-hidden="true"></i> Reg No 2019030187292</li>
                   <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Department of computer engineering</li>
                   <li onClick={() => navigate('/home/friendlist')}><i className="fa fa-users" aria-hidden="true"></i>My Friends</li>
                   
                 </ul>
                 <div className="profile_pagination">
                   <span className="span_underline">Post</span>
                   <span>Receipts</span>
                 </div>


     <div className="all_posts">
          <article className="postCard" >
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

     </div>  

   </>               
}

export default Profile