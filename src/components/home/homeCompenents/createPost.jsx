import { useNavigate } from 'react-router-dom'
import Filegrid from './filegrid'

const CreatePost = () => {
  const navigate = useNavigate()
    return <>
         <div className="Create_post">
          <nav><i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i> <strong className='postButton'>post</strong></nav>
            <form className="createPost" autocomplete="off">
                 <h3>Create Post</h3>
                 <div className="poster_profile">
                    <img src="esutlogo.jpg" alt="esutlogo"/>
                      <div>
                         <span>Dilan Besong</span>
                         <select id="data-list">
                            <option   value="public">public</option>
                            <option value="private">private</option>
                         </select>
                      </div>
                 </div>
                 <textarea 
                  maxLength="500"
                  placeholder="Enter text or paste link"></textarea>
                  <div className="choose_file">
                     <input type="file" id="file"/>
                      <label htmlFor="file">Upload <i className="fa fa-upload"></i></label>
                      <input readOnly type="text" value="50"/>
                  </div>
                  <button type="button">Preview <i className="fa fa-file"></i></button>
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
                  <Filegrid/>
                  {/* <div className="fileGrid filegrid_1">
                      <div>1</div>
                  </div> */}
                <div className="number_of_comments">0 Comments</div>
                  <section className="post_reactions">
                   <span><i className="fa fa-heart" arial-hidden></i> Love 0k</span>
                   <span><i className="fa fa-comment" arial-hidden></i> Comment</span>
                   <span> <i className="fa eye" arial-hidden></i> 0 views </span>
                 </section>
                </div>
              </article>
        </div> 
    </>              
}

export default CreatePost