import Comment from "./comment"
import Suggestion from "./suggestion"
import {useNavigate} from 'react-router-dom'
const ViewPost = () => {
    const navigate = useNavigate()
   return <>
       <div className="See_post">
         <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i> Post</nav>
             <article className="postCard">
               {/* <Suggestion/> */}
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
                   <span><i className="fa fa-heart" aria-hidden="true"></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden="true"></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden="true"></i> 100k views </span>
                 </section>
                 <Comment/>
                </div>
              </article>
          </div> 

   </>
}

export default ViewPost