import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
const HomeNav = () => {
    const navigate = useNavigate()
    const [student, setStudent] = useState(JSON.parse(sessionStorage.getItem('user')))
    const { user } = student
    return <>
        <nav className="homeNavBar" onClick={() => navigate('/home/profile', {state:user._id})}>
            <div className="logo">
                <img src='https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180' alt="esutlogo"/>
                <span> CEE 🕊️   </span>
            </div>
                    
                     <span onClick={() => navigate('/home/friendrequest') }> <i className="fa fa-user-circle" aria-hidden="true"></i></span>
                     <div onClick={() => navigate('/home/sentfriendrequest')}> <i className="fa fa-user-plus" aria-hidden="true"></i></div>
                     <div onClick={() => navigate('/home/mygroup')}> <i className="fa fa-users" aria-hidden="true"></i></div>
                  
            <div className="nav_user">
                <span>{user.username}</span>
                <img src={user.profileImage} alt="myprofile"/>
            </div>
        </nav>
    </>              
}

export default HomeNav