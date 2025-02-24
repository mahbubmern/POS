import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/frontend/img/sonali-bank-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import createToast from "../../utils/createToast";
import { userLogin } from "../../features/auth/authApiSlice";

// frontend these wise image import Start

import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import google from "../../assets/img/icons/google.png";
import facebook from "../../assets/img/icons/facebook.png";
import login from "../../assets/img/login.jpg";

// frontend these wise image import End

import Title from "../../components/Title/Title";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, error, message } = useSelector(authSelector);

  const [showPassword, setShowPassword] = useState(false);

  const { input, handleInputChange, formReset } = useForm({
    index: "",
    password: "",
  });

  const handleLoginForm = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));

    // navigate("/account-activation-by-otp");
  };

  // toggle Password

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (message) {
      // Display a success message only if there is a message
      createToast(message, "success"); // Display the success message
      dispatch(setEmptyMessage()); // Clear the message state
      dispatch(formReset); // Reset the form
      navigate("/dashboard"); // Redirect to the dashboard
    }
    if (error) {
      // Display an error message only if there is an error
      createToast(error); // Display the error message
      dispatch(setEmptyMessage()); // Clear the message state
    }
  }, [message, error, dispatch, formReset, navigate]);

  return (
    <>
      <Title title={"POS | Login"} />
      <body className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <div className="login-wrapper">
              <div className="login-content">
                <div className="login-userset">
                  <div className="login-logo">
                    <img src={logo} alt="img" />
                  </div>
                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4>Please login to your account</h4>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        placeholder="Enter your email address"
                      />
                      <img src={mailIcon} alt="img" />
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="pass-input"
                        placeholder="Enter your password"
                      />
                      <span className="fas toggle-password fa-eye-slash" />
                    </div>
                  </div>
                  <div className="form-login">
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/forgot-password" className="hover-a">
                          Forgot Password?
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="form-login">
                    <a className="btn btn-login" href="index.html">
                      Sign In
                    </a>
                  </div>
                  <div className="signinform text-center">
                    <h4>
                      Don’t have an account?{" "}
                      <Link to="/register" className="hover-a">
                        Sign Up
                      </Link>
                    </h4>
                  </div>
                  <div className="form-setlogin">
                    <h4>Or sign up with</h4>
                  </div>
                  <div className="form-sociallink">
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src={google} className="me-2" alt="google" />
                          Sign Up using Google
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src={facebook} className="me-2" alt="google" />
                          Sign Up using Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="login-img">
                <img src={login} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
