import { Link } from "react-router-dom"

const Home = () => {
   return <>
       <div className="All_posts" id="All_posts">
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
                    <option value="CEE">CEE</option>
                    <option value="ALL">All</option>
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
                <Link to='/home/post/1' style={{ color:'#000'}} preventScrollReset>
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
                </Link>
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
          </div>  
   </>               
}

export default Home