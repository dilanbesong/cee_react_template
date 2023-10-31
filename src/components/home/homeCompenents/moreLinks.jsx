import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const MoreLinks = () => {
   const user = JSON.parse(sessionStorage.getItem('user')).user
   
   const navigate = useNavigate()
   
    return <>
         <div className="moreLinks">
                  <article className="linkCard"  onClick={() => navigate('/home/friendrequest') } >
                     <div> <i className="fa fa-user-circle" aria-hidden="true"></i> <span>friend request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigate('/home/sentfriendrequest')}>
                     <div> <i className="fa fa-user-plus" aria-hidden="true"></i> <span>sent request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigate('/home/mygroup')}>
                     <div> <i className="fa fa-users" aria-hidden="true"></i> <span>my groups</span></div>
                  </article>
                  { user.isAdmin && <article className="linkCard" onClick={ () => navigate('/home/admin')}>
                    <div> <i className="fa fa-user-o" aria-hidden></i> <span>admin</span></div>
                  </article>}

                  <article className="linkCard" onClick={ () => navigate('/')}>
                     <div> <i className="fa fa-sign-out" aria-hidden></i> <span>logout</span></div>
                  </article>
                  
               </div>
    </>              
}

export default MoreLinks