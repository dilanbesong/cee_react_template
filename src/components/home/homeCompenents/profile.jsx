 import { useNavigate } from 'react-router-dom'
 import { useRef } from 'react'
 
const Profile = () => {
  const navigate = useNavigate()
  const postRecieptSlider = useRef(null)
  const paginatedSpanPostButton = useRef(null)
  const paginatedSpanRecieptButton = useRef(null)
  const allPostRef = useRef(null)
  const allRecieptRef = useRef(null)

  const handlePaginationPost = () => {
    paginatedSpanPostButton.current.classList.add('span_underline')
    paginatedSpanRecieptButton.current.classList.remove('span_underline')
    const PostIndex = 0
    postRecieptSlider.current.style.transform = `translateX(${-allPostRef.current.clientWidth * PostIndex}px)`
  }

  const handlePaginationReciept = () => {
    paginatedSpanPostButton.current.classList.remove('span_underline')
    paginatedSpanRecieptButton.current.classList.add('span_underline')
    const RecieptIndex = 1
    postRecieptSlider.current.style.transform = `translateX(${-allRecieptRef.current.clientWidth * RecieptIndex}px)`
  }
  
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
                    <button onClick={() => navigate('/home/location')}> local <i className="fa fa-map-marker" aria-hidden="true"></i> </button>
                 </div>
                 <ul className="info_list">
                   <li><i className="fa fa-code" aria-hidden="true"></i> Reg No 2019030187292</li>
                   <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Department of computer engineering</li>
                   <li onClick={() => navigate('/home/friendlist')}><i className="fa fa-users" aria-hidden="true"></i>My Friends</li>
                   
                 </ul>
                 <div className="profile_pagination">
                   <span className='span_underline' ref={paginatedSpanPostButton} onClick={ () => handlePaginationPost() }>Post</span>
                   <span ref={paginatedSpanRecieptButton} onClick={ () => handlePaginationReciept() }>Receipts</span>
                 </div>

       <div className="postRecieptContainer">
           <div className="postReceiptSlider" ref={postRecieptSlider}>
              <div className='all_posts' ref={allPostRef}>
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
              <div className='all_reciepts' ref={allRecieptRef}>Reciept goes here !!!</div>
           </div>
       </div>

         {/* <div className="all_posts"></div> */}

     </div>  

   </>               
}

export default Profile


