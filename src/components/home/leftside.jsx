 
import { Link } from 'react-router-dom'
import { sideBarLinks } from './sideBarLinks'

const LeftSide = () => {
    const user = JSON.parse(sessionStorage.getItem('user')).user
    const newSideBarLinks = sideBarLinks.filter(obj => {
        if(user.isAdmin == false){
          return obj.link !== `/home/admin`
        }
        return obj
    })
    
    return <>
       <section className="left_side">

         <p>
  
          { newSideBarLinks.map( ({ icon, link, iconName, id },i) => {
            return  <Link to={link} key={i}>
                   <i className={icon} key={id} aria-hidden></i>
                   <span>{ iconName }</span>
               </Link>
            
          })}

         
          <Link to="/home/notification" className="side_notification" data-numofnotications="0+">
            <i className="fa fa-bell" aria-hidden="true"></i>
            <span>Notify</span>
          </Link>

         </p>
      </section>

    </>             
}

export default LeftSide