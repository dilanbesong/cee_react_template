import { useRef } from "react";

const ForgottenPassword = ({ authSlideContainer }) => {
  const forgottenPasswordForm = useRef(null)
  const loginIndex = 0
  const navigateToLogin = () => {
     authSlideContainer.current.style.transform = `translateX(${ forgottenPasswordForm.current.clientWidth * loginIndex}px)`
  }
     return <>
           <form className="Forgotten_Password_form form" ref={forgottenPasswordForm} autoComplete="off">
             <div className="form_header">
                   <img src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt="esutlogo"/>
                   <p>Esut portal</p>
               </div>
                <h3>Forgot password</h3>
            <section className="form_control_input" id="forgot_password">
               <div>
              <p>Email</p>
              <input type="email" placeholder="enter email ..." required />
            </div>
            <div>
              <p>Otp</p>
              <i className="fas fa-ring" aria-hidden="true"></i>
              <input type="tel" placeholder="enter temporal password ..." required />
            </div>
            </section>
            <div>
                <button type="submit">verify</button>
                 <p onClick={() => navigateToLogin()}>Go back to Sign in</p>
            </div>
          </form>
     </>             
}

export default ForgottenPassword