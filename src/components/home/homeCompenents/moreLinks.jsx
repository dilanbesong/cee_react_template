import {useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../../context'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MoreLinks = () => {
   const user = JSON.parse(sessionStorage.getItem('user')).user
   const navigation = useNavigate()
   
   
    return <>
         <div className="moreLinks">
                  <article className="linkCard" onClick={ () => navigation('/home/friendrequest',{ id:user._id})}>
                     <div> <i className="fa fa-user-circle" aria-hidden="true"></i> <span>friend request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigation('/home/sentfriendrequest')}>
                     <div> <i className="fa fa-user-plus" aria-hidden="true"></i> <span>sent request</span></div>
                  </article>
                  <article className="linkCard" onClick={ () => navigation('/home/mygroup')}>
                     <div> <i className="fa fa-users" aria-hidden="true"></i> <span>my groups</span></div>
                  </article>
                  { user.isAdmin && <article className="linkCard" onClick={ () => navigation('/home/admin')}>
                    <div> <i className="fa fa-user-o" aria-hidden></i> <span>admin</span></div>
                  </article>}

                  <article className="linkCard" onClick={ () => navigation('/')}>
                     <div> <i className="fa fa-sign-out" aria-hidden></i> <span>logout</span></div>
                  </article>
               </div>
    </>              
}

export default MoreLinks