import LeftSide from './leftside'
import RightSide from './rightside'
import MiddleSide from './middleside'
import HomeNav from './homeNav'
import "../../styles/home/main.css"
import "../../styles/home/middle_side.css"
import "../../styles/home/post_card.css"
import "../../styles/home/profile.css"
import "../../styles/home/view_friends.css"
import "../../styles/home/notification.css"
import "../../styles/home/payment.css"
import "../../styles/home/comment.css"
import "../../styles/home/friendlist.css"
import "../../styles/home/createpost.css"
import "../../styles/home/edit.css"
import "../../styles/home/rightside.css"
import "../../styles/home/img_map_slide.css"
import "../../styles/home/search.css"
import "../../styles/home/group_profile.css"
import "../../styles/home/create_group.css"
import "../../styles/home/friendrequest.css"
import "../../styles/home/register.css"
import "../../styles/home/myfriends.css"
import "../../styles/home/mygroup.css"



const HomePage = ({ children }) => {
   return <>
   <HomeNav/>
   <main>
      <LeftSide />
       <MiddleSide children={ children } />
      <RightSide/>
   </main>
    
   </>               
}

export default HomePage