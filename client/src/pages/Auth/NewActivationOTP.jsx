import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/frontend/img/sonali-bank-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import createToast from "../../utils/createToast";
import { newActivationOTP } from "../../features/auth/authApiSlice";
import Title from "../../components/Title/Title";

// frontend these wise image import Start

import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import login from "../../assets/img/login.jpg";
// frontend these wise image import End

const NewActivationOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, error, message } = useSelector(authSelector);

  const { input, handleInputChange, formReset } = useForm({
    email: "",
  });

  const handleNewOTPForm = (e) => {
    e.preventDefault();
    dispatch(newActivationOTP(input));
    dispatch(formReset);
    // navigate("/account-activation-by-otp");
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setEmptyMessage());
      dispatch(formReset);
      navigate("/account-activation-by-otp");
    }
    if (error) {
      createToast(error);
      dispatch(setEmptyMessage());
    }
  }, [message, error, dispatch, formReset, navigate]);
  return (
    <>
      <Title title={"POS | New Activation OTP"} />
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
                    <h3>New Activation OTP</h3>
                    <h4>Enter your email to get OTP</h4>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input type="text" placeholder="Enter your Email" />
                      <img src={mailIcon} alt="img" />
                    </div>
                  </div>

                  <div className="form-login">
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/login" className="hover-a">
                          Login?
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="form-login">
                    <a className="btn btn-login" href="index.html">
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

export default NewActivationOTP;
