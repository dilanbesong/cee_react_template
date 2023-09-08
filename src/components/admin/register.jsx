import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    regNumber: "",
    sex: "",
    isAdmin:false,
    phoneNumber: "",
    level: 100,
    yearOfEntry: new Date().getFullYear(),
    modeOFEntry: "UTME",
  });
  const [edit, setEdit ] = useState(false)

  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({...user,[name]: value });
  };
  const handleSignUp = (e) => {
    e.preventDefault()
     console.log(user)
  };
  return (
    <>
      <div className="signUp_Container">
        <form className="SignUp_form form" onSubmit={handleSignUp} autocomplete="off">
          <nav>
            <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
            <span onClick={() => navigate("/home/creategroup")}>
              {" "}
              Create group ? New{" "}
            </span>
            <span>
              {" "}
              IsAdmin <input type="checkbox" name='isAdmin' value={Boolean(!user.isAdmin)} onChange={handleInput} />
            </span>
          </nav>
          <h3>Create Account</h3>
          <section className="form_control_input">
            <div>
              <p>Username</p>
              <i className="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                onChange={handleInput}
                value={user.username}
                focus
                placeholder="enter username ..."
                required
              />
            </div>

            <div>
              <p>Email</p>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="enter email ..."
                required
              />
            </div>

            <div>
              <p>Password</p>
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="enter password ..."
                required
              />
            </div>

            <div>
              <p>PhoneNumber</p>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInput}
                maxLength="11"
                placeholder="enter phoneNumber ..."
                required
              />
            </div>

            <div>
              <p>Reg number</p>
              <input
                type="tel"
                maxLength="13"
                name='regNumber'
                value={user.regNumber} 
                onChange={handleInput}
                placeholder="enter regNumber ..."
                required
              />
            </div>

            <div>
              <p>Sex</p>
              <select required name='level' value={user.sex} onChange={handleInput}>
                <option value={"male"}>male</option>
                <option value={"female"}>female</option>
              </select>
            </div>

            <div>
              <p>Student level</p>
              <select required name='level' value={user.level} onChange={handleInput}>
                <option value={"100"}>100</option>
                <option value={"200"}>200</option>
              </select>
            </div>

            <div>
              <p>Mode of Entry</p>
              <select required name='modeOFEntry' value={user.modeOFEntry} onChange={handleInput}>
                <option value={"UTME"}>UTME</option>
                <option value={"DE"}>Direct Entry</option>
              </select>
            </div>

            <div>
              <p>Year of Entry</p>
              <select required name='yearOFEntry' value={user.yearOfEntry} onChange={handleInput}>
                <option value={new Date().getFullYear()}>
                  {new Date().getFullYear()}
                </option>
                <option value={new Date().getFullYear() - 1}>
                  {new Date().getFullYear() - 1}
                </option>
              </select>
            </div>

            <div>
              <button type="submit">{ edit ? 'Edit' : 'Sign up' }</button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Register;
