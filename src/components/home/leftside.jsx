 
import { Link } from 'react-router-dom'
import { sideBarLinks } from './sideBarLinks'

const LeftSide = () => {
   
    return <>
       <section className="left_side">

         <p>
  
          { sideBarLinks.map( ({ icon, link, iconName, id },i) => {
            return  <Link to={link} key={i}>
                   <i className={icon} key={id} aria-hidden></i>
                   <span>{ iconName }</span>
               </Link>
            
          })}

         
          <Link to="/home/notification" className="side_notification" data-numofnotications="99+">
            <i className="fa fa-bell" aria-hidden="true"></i>
            <span>Notify</span>
          </Link>

         </p>
      </section>

    </>             
}

export default LeftSide