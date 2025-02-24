import { Link, useNavigate } from "react-router-dom";

// import forgotpasswordicon from "../../assets/frontend/img/forgotpasswordicon.png";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
import { useForm } from "../../hooks/useForm";

import { useEffect } from "react";
import createToast from "../../utils/createToast";
import { forgotPassword } from "../../features/auth/authApiSlice";
import Title from "../../components/Title/Title";

// frontend these wise image import Start

import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import login from "../../assets/img/login.jpg";
// frontend these wise image import End

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, error, message } = useSelector(authSelector);

  const { input, handleInputChange, formReset } = useForm({
    email: "",
  });

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(input));

    // navigate("/account-activation-by-otp");
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setEmptyMessage());
      dispatch(formReset);
      navigate("/retrieve-password-by-otp");
    }
    if (error) {
      createToast(error);
      dispatch(setEmptyMessage());
    }
  }, [message, error, dispatch, formReset, navigate]);

  return (
    <>
      <Title title={"POS | Forgot Password"} />
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
                    <h3>Forgot password?</h3>
                    <h4>
                      Don’t warry! it happens. Please enter the address <br />
                      associated with your account.
                    </h4>
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
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/login" className="hover-a">
                          Remember Password?
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="form-login">
                    <a className="btn btn-login" href="signin.html">
                      Submit
                    </a>
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

export default ForgotPassword;
