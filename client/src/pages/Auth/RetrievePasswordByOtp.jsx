import { Link, useNavigate } from "react-router-dom";
// import resetpasswordicon from "../../assets/frontend/img/resetpasswordicon.png";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import createToast from "../../utils/createToast";
import { retrievePasswordByOTP } from "../../features/auth/authApiSlice";
import Title from "../../components/Title/Title";

// frontend these wise image import Start
import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import login from "../../assets/img/login.jpg";

// frontend these wise image import End

const RetrievePasswordByOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, error, message } = useSelector(authSelector);

  const { input, handleInputChange, formReset } = useForm({
    otp: "",
    password: "",
  });

  const handleForgotPasswordByOTP = (e) => {
    e.preventDefault();
    dispatch(retrievePasswordByOTP(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setEmptyMessage());
      dispatch(formReset);
      navigate("/login");
    }
    if (error) {
      createToast(error);
      dispatch(setEmptyMessage());
    }
  }, [message, error, dispatch, formReset, navigate]);

  return (
    <>
      <Title title={"POS | Retrieve Password By OTP"} />
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
                    <h3>Retrieve Password By OTP</h3>
                    <h4>Check Your Email for OTP</h4>
                  </div>
                  <div className="form-login">
                    <label>OTP</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        placeholder="Enter your OTP"
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
                      Retrieve Password
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

export default RetrievePasswordByOtp;
