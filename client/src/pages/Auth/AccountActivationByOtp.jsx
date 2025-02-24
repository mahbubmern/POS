import { Link, useNavigate } from "react-router-dom";
// import otpImage from "../../assets/frontend/img/otp.png";
// import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
import { useForm } from "../../hooks/useForm";
import createToast from "../../utils/createToast";
import { accountActivation } from "../../features/auth/authApiSlice";
import Title from "../../components/Title/Title";

// frontend these wise image import Start

import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import login from "../../assets/img/login.jpg";
// frontend these wise image import End

const AccountActivationByOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, error, message } = useSelector(authSelector);
  // const [formAction, setFormAction] = useState("");

  const { input, handleInputChange, formReset } = useForm({
    otp: "",
  });

  // useEffect(() => {
  //   const activationToken = new Cookies().get("activationToken");
  //   if (activationToken) {
  //     setFormAction(
  //       `http://localhost:5050/api/v1/auth/account-activate-by-otp/${activationToken}`
  //     );
  //   }
  // }, []);

  const handleOTP = (e) => {
    e.preventDefault();
    // Dispatching the accountActivation action with the token included in the request body
    // const activationToken = new Cookies().get("activationToken");
    // if (activationToken) {
    // }
    dispatch(accountActivation(input));
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
      dispatch(formReset);
    }
  }, [message, error, dispatch, formReset, navigate]);

  return (
    <>
      <Title title={"POS | Account Activation"} />
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
                    <h3>Account Activation By OTP</h3>
                    <h4>
                      Check Your Email... OTP has been Sent <br />
                      associated with your account.
                    </h4>
                  </div>
                  <div className="form-login">
                    <label>OTP</label>
                    <div className="form-addons">
                      <input type="text" placeholder="Enter your OTP" />
                      <img src={mailIcon} alt="img" />
                    </div>
                  </div>
                  <div className="form-login">
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/resend-activation-link" className="hover-a">
                          Need Resend Activation OTP ?
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

export default AccountActivationByOtp;
