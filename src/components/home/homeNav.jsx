import { useNavigate } from 'react-router-dom'
const HomeNav = () => {
    const navigate = useNavigate()
    return <>
        <nav className="homeNavBar" onClick={() => navigate('/home/profile')}>
            <div className="logo">
                <img src="./asserts/esutlogo.jpg" alt="esutlogo"/>
                <span>CEE @INFO </span>
            </div>
            <div className="nav_user">
                <span>Dilan Besong</span>
                <img src="esutlogo.jpg" alt="myprofile"/>
            </div>
        </nav>
    </>              
}

export default HomeNav