const Login = () => {
   return <>
         <form className="SignIn_form form"  autoComplete="off">
             <div className="form_header">
                   <img  src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180" alt="esutlogo"/>
                   <p>Esut portal</p>
               </div>
               <h3>Log in to Account</h3>
              <section className="form_control_input" id="SignIn_form">
                 <div>
              <p>Email</p>
               <i className="fa fa-envelope" aria-hidden="true"></i>
              <input type="text" placeholder="enter email ..." required />
            </div>
            <div>
              <p>Password</p>
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input type="password" placeholder="enter password..." required />
            </div>
  
            </section>
            <div className="PasswordAccountDiv">
              <button type="submit">Sign up</button>
              <p>Forgot password ? <a href="#">Click Here</a></p>
              <p> Don't have an account ? <a href="#">Sign up</a></p>
            </div>
          </form>
    </>               
}

export default Login