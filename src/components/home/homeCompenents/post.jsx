// import Suggestion from './suggestion'
import Filegrid from './filegrid'
import { useNavigate } from 'react-router-dom'
const Post = ({ body, fileList, posterId }) => {
   const navigate = useNavigate()
   const post = { body, fileList, posterId }
   return <>
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
                  </header>
                  <p id="postText"> { body } </p>
                  <Filegrid fileList={ fileList }/>

                 <div className="number_of_comments">2.2K Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" aria-hidden></i> Love 100K</span>
                   <span><i className="fa fa-comment" aria-hidden></i> Comment</span>
                   <span> <i className="fa fa-eye" aria-hidden></i> 100k views </span>
                 </section>

                </div>
              </article>
   </>
}

export default Post