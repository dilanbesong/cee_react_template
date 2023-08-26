import {useNavigate} from 'react-router-dom'

const MoreLinks = () => {
   const navigation = useNavigate()
    return <>
         <div className="moreLinks">
                  <article className="linkCard" onClick={ () => navigation('/home/friendrequest',{ id: '1'})}>
                     <div> <i class="fa fa-user-circle" aria-hidden="true"></i> <span>friend request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigation('/home/friendrequest')}>
                     <div> <i class="fa fa-user-plus" aria-hidden="true"></i> <span>sent request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigation('/home/mygroup')}>
                     <div> <i class="fa fa-users" aria-hidden="true"></i> <span>my groups</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigation('/home/admin')}>
                    <div> <i className="fa fa-user-o" aria-hidden></i> <span>admin</span></div>
                  </article>
                  {/* <article className="linkCard" onClick={ () => navigation('/home/friendrequest')}>
                    <div> <i className="fa fa-file" aria-hidden></i> <span>cee images</span></div>
                  </article> */}
                  <article className="linkCard" onClick={ () => navigation('/')}>
                     <div> <i className="fa fa-sign-out" aria-hidden></i> <span>logout</span></div>
                  </article>
               </div>
    </>              
}

export default MoreLinks