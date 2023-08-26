import {useNavigate} from 'react-router-dom'

const MyGroups = () => {
   const navigate = useNavigate()
   return <> 
          <div className="UserGroupList">
              <nav> 
               <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
                  <div> 
                  <i className="fa fa-search"></i>
                  <input type="search" placeholder="find my groups"  />
                  </div> 
              </nav>
              <div className="groupList">
                  <article className='groupCard' onClick={() => navigate('/home/group/1')}>
                      <img src="" alt="groupImg" />
                      <div>
                         <h3>IEEE</h3>
                         <p>Restoring the dignity of mankind, to save and heal the world</p>
                      </div>
                      <span>member</span>
                  </article>

                  
              </div>
           </div> 
      </>               
}

export default MyGroups