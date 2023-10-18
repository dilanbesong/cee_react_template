import { useRef, useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ForgottenPassword = ({ authSlideContainer }) => {
  const forgottenPasswordForm = useRef();
  const emailEleInput = useRef()
  const [reset, setReset] = useState({ email: "", otp: "", password: "" });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [submitText, setSubmitText] = useState("verify");
  const handleResetInput = (e) => {
    const { name, value } = e.target;
    setReset({ ...reset, [name]: value });
  };

  async function generateResetCode() {
    const { data } = await axios.post("/api/getResetCode", { email: reset.email });
    if (data.isSendCode) {
      setShowOtpInput(true);
      setShowPasswordInput(true);
      setSubmitText("reset password");
      toast.success(data.msg);
      return;
    }
    toast.error(data.error);
    return;
  }
  async function resetPassword() {
    const IsConfirm = confirm(`Check that the password ${reset.password} ok!`);
    if (IsConfirm) {
      const { data } = await axios.put("/api/resetPassword", {
        email:reset.email,
        resetCode: reset.otp,
        newPassword: reset.password,
      });
      if (data.isPasswordReset) {
        setShowOtpInput(false);
        setShowPasswordInput(false);
        setSubmitText("verify");
        toast.success(data.msg);
        return;
      }
      toast.error(data.error);
      return;
    }
  }
  const handleReset = (e) => {
    e.preventDefault();
   if(emailEleInput.current.value == '') return
    if (e.target.value == "verify") {
      generateResetCode();
    }
    if (e.target.value == "reset password") {
      resetPassword();
    }
  };
  const loginIndex = 0;
  const navigateToLogin = () => {
    authSlideContainer.current.style.transform = `translateX(${
      forgottenPasswordForm.current.clientWidth * loginIndex
    }px)`;
  };
  return (
    <>
      <form
        className="Forgotten_Password_form form"
        ref={forgottenPasswordForm}
        autoComplete="off"
      >
        <div className="form_header">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Oprpe36XqXLL_HjlF04i2QAAAA&pid=Api&P=0&h=180"
            alt="esutlogo"
          />
          <p>Esut portal</p>
        </div>
        <h3>Reset password</h3>
        <section className="form_control_input" id="forgot_password">
          <div>
            <p>Email</p>
            <input
              type="email"
              value={reset.email}
              name="email"
              onChange={handleResetInput}
              placeholder="enter email ..."
              ref={emailEleInput}
              required
            />
          </div>
          {showOtpInput && (
            <div>
              <p>Otp</p>
              <i className="fas fa-ring" aria-hidden="true"></i>
              <input
                type="tel"
                value={reset.otp}
                name="otp"
                onChange={handleResetInput}
                placeholder="enter temporal password ..."
                required
              />
            </div>
          )}

          {showPasswordInput && (
            <div>
              <p>New password</p>
              <i className="fas fa-ring" aria-hidden="true"></i>
              <input
                type="tel"
                value={reset.password}
                name="password"
                onChange={handleResetInput}
                placeholder="enter temporal password ..."
                required
              />
            </div>
          )}
        </section>
        <div>
          <button type="submit" onClick={ e => handleReset(e)} value={submitText}>{submitText}</button>
          <p onClick={() => navigateToLogin()}>Go back to Sign in</p>
        </div>
      </form>
      <Toaster/>
    </>
  );
};

export default ForgottenPassword;
