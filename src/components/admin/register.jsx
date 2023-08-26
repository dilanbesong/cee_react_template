import { useNavigate } from 'react-router-dom'
const Register = () => {

   const navigate = useNavigate()

   return <>
      <div className='signUp_Container'>
       <form className="SignUp_form form" autocomplete="off">
               <nav>
                 <i className="fa fa-arrow-left" onClick={() => navigate(-1)} ></i>
                  <span onClick={() => navigate('/home/creategroup')}> Create group ? New </span>
                 </nav>
               <h3>Create Account</h3>
         <section className="form_control_input">
             <div>
              <p>Username</p>
              <i className="fa fa-user" aria-hidden="true"></i>
              <input type="text" focus placeholder="enter username ..." required />
            </div> 

            <div>
              <p>Email</p>
               <i className="fa fa-envelope" aria-hidden="true"></i> 
              <input type="email" placeholder="enter email ..." required="" fdprocessedid="ptwdrs"/>
            </div>

            <div>
              <p>Password</p>
               <i className="fa fa-unlock-alt" aria-hidden="true"></i> 
              <input type="password" placeholder="enter password ..." required/>
          
            </div>
          
            <div>
              <p>PhoneNumber</p>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <input type="text" maxLength="11" placeholder="enter phoneNumber ..." required />
            </div>

            <div>
              <p>Reg number</p>
              <input type="tel" maxLength="13" placeholder="enter regNumber ..." required />
            </div>

            <div>
              <p>Student level</p>
              <select required>
                  <option value={'100'}>100</option>
                  <option value={'200'}>200</option>
              </select>
            </div>

            <div>
              <p>Mode of Entry</p>
              <select required>
                  <option value={'UTME'}>UTME</option>
                  <option value={'DE'}>Direct Entry</option>
              </select>
            </div>

            <div>
              <p>Year of Entry</p>
              <select required>
                  <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                  <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
              </select>
            </div>

            <div>  <button type="submit">Sign up</button> </div>
         </section>
                
       </form>
      </div>
   </>               
}

export default Register