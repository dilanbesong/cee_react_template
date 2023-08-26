const Comment = () => {
    return <>
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
    </>              
}

export default Comment