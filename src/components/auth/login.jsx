
import { useEffect, useRef, useState } from "react"
import { TailSpin, InfinitySpin, BallTriangle, ThreeDots } from "react-loader-spinner"
import toast, {  Toaster } from "react-hot-toast"
import axios from 'axios'
import { useGlobalContext } from "../../context"
import {  useNavigate } from "react-router-dom"
import { BASEURL } from "../../baseUrl"


const Login = ({ authSlideContainer }) => {
  const { VITE_BACKEND_BASE_URL } = import.meta.env
   const loginForm = useRef(null)
   const navigate = useNavigate()
   const [login, setLogin ] = useState({ email:'', password:''})
   const [isSubmit, setIsSubmit ] = useState(false)
   const [isLogin, setIsLogin ] = useState(false)
   const { setState } = useGlobalContext()
  

   const handleLoginInput = (e) => {
      const { name, value } = e.target
      setLogin({...login, [name]:value})
   }
   const handleLogin = async (e) => {
     e.preventDefault()
     setIsSubmit(true)
    const { data } = await axios.post(`${BASEURL}/login`, login)

    console.log(data);
    
    if(data['user'] && data['user'].isBlocked == false){
       setIsLogin(true)
       setIsSubmit(false)
      
       sessionStorage.setItem('isAuth', 'true')
       sessionStorage.setItem('user', JSON.stringify(data))
       navigate('/home/main')
      return
    }else{
       setIsSubmit(false)
       navigate('/')
       toast.error(data.msg)
    }
       
    
     
   }
   const forgottenPasswordIndex = 1
   const navigateToForgottPassword = () => {
     authSlideContainer.current.style.transform = `translateX(${-loginForm.current.clientWidth * forgottenPasswordIndex}px)`
  }

  

  

   return <>
         <form className="SignIn_form form" onSubmit={handleLogin} ref={loginForm}  autoComplete="off">
             <div className="form_header">
                   <img  src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt="esutlogo"/>
                   <p>Esut portal</p>
               </div>
               <h3>Log in to Account</h3>
              <section className="form_control_input" id="SignIn_form">
                 <div>
              <p>Email</p>
               <i className="fa fa-envelope" aria-hidden="true"></i>
              <input type="email" value={login.email} name="email" onChange={handleLoginInput} placeholder="enter email ..." required />
            </div>
            <div>
              <p>Password</p>
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input type="password" value={login.password} name="password" onChange={handleLoginInput} placeholder="enter password..." required />
            </div>
  
            </section>
            <div className="PasswordAccountDiv">
              {isSubmit ? <ThreeDots color="brown"/> : <button type="submit">submit</button>}
              <p onClick={() => navigateToForgottPassword() }>Forgot password ? Click Here</p>
            </div>
          </form>
          <Toaster/>
    </>               
}

export default Login