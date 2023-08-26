import { useNavigate } from 'react-router-dom'
const FriendList = () => {
   const navigate = useNavigate()
    return <>
      <div className="FriendListSection">
          <nav> 
            <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
             <div className="searchControl"> <i className="fa fa-search" aria-hidden></i> 
               <input type="search" placeholder="find friend ..." />
            </div>
           </nav>
           <div className="FriendList">
                  <article id="friendCard">
                     <img src="profile" className="friendImg" alt="" /> 
                      <div className="friendCardInfo"> 
                         <strong>Dilan</strong>
                         <p>2 mutual friends</p>
                      </div>
                      <div className="friendCardButton">
                           <button> cancel</button>  
                           <button className="add">add</button>       
                      </div>
                  </article>
           </div>
      </div>
    </>              
}

export default FriendList