import { useNavigate } from "react-router-dom"

const GroupPage = () => {
      const navigate = useNavigate()
   return <>
      <div className="groupPageSection">

             <div className="groupProfile_pic">
      <nav > <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i> Group</nav>
                <p><img className="groupPic" src="" alt="esutlogo"/></p>
            </div>
            <div className="group_header">
                  <h3>Artificial intelligence Network</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Error omnis dolores natus vero vitae amet quis obcaecati vel? In, deserunt!</p>
            </div>
            <div className="btn_section">
                  <button onClick={() => navigate('/home/creategroup')}>Edit</button>
                  <button onClick={() => navigate('/home/createPost')}>Create</button>
                  <button onClick={() => navigate('/home/mygroup')}>members</button>
            </div>
            <div className="group_info">
                  <p> <i className="fa fa-user" aria-hidden="true"></i>Created since 2020</p>
                  <p> <i className="fa fa-user"></i> last visted 1hr ago</p>
                   <p onClick={() => navigate('/home/mygroup')}> <i className="fa fa-users"></i> public group . 12k members</p>
                    <p onClick={() => navigate('/home/friendrequest')}> <i className="fa fa-user-plus"></i>group request</p>
            </div>
            <div className="group_pagination">
                  <strong className="pagination_underline">Group post</strong>
                  <strong>Galery</strong>
            </div>
            <div className="groupContainer">
                  <div className="group_slide">
                         <div>all post</div>
                         <div>all galary</div> 
                         <div>all members</div>                     
                  </div>
            </div>
       </div>
   </>               
}

export default GroupPage