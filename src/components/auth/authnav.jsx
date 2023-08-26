import '../../styles/auth/auth.css'
import Login from './login'
import ForgottenPassword from './forgetpassword'
const AuthNav = () => {
   return <>
      <header>
      <nav className="auth_nav">
        <div className="logo">
          <img src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt=""/>
         <span>CEE Portal</span>
        </div>
       </nav>
     </header>
<div className='authBackground'>
    <main className='authMain'> 
      <div className='authSlideContainer'>
        <div className="auth_slider">
           <Login/>
            <ForgottenPassword/>
        </div>
      </div>
       <div className="auth_dialog_Box">
           <img src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt="esutlogo"/>
             <h3>Thank You!</h3>
             <p>Your details have successfully been submitted thanks </p>
             <button className="close_btn" type="submit">Ok</button>
       </div>
       
    </main>
 </div>
   </>               
}
export default AuthNav