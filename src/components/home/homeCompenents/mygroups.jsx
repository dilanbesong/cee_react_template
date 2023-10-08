import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'


const MyGroups = () => {
   const navigate = useNavigate()
   const [ mygroups, setMyGroups ] = useState([])
   const [isloading, setIsLoading] = useState(true)
   async function getMyGroups(){
      const { data } = await axios.get('/api/getMyGroups')
      console.log(data);
      if(data.GroupList.length >= 1) {
          setMyGroups(data.GroupList)
          setIsLoading(false)
          return
      }
     
   }
   useEffect( () => {
        getMyGroups()
   },[])

 
function Group( { groupName, groupProfile, groupDescription, groupMembers, _id, }){
    return <article className='groupCard' key={_id} onClick={() => navigate(`/home/group/${_id}`)}>
                      <img src={groupProfile} alt="groupProfile" />
                      <div>
                         <h3>{groupName}</h3>
                         <p>{groupDescription}</p>
                      </div>
                      <span>member</span>
                  </article>
}
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
                 {   isloading ? <CirclesWithBar color='grey'/> :  mygroups.map( group => {
                     return <Group {...group }/>
                 })} 
              </div>
           </div> 
      </>               
}

export default MyGroups