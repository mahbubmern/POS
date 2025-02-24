// export default Register;

import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/frontend/img/sonali-bank-logo.png";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createUserRegister } from "../../features/auth/authApiSlice";
import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";

import { useEffect, useState } from "react";
import createToast from "../../utils/createToast";
import API from "../../utils/api";
import Form from "react-bootstrap/Form";

// frontend these wise image import Start

import logo from "../../assets/img/logo.png";
import mailIcon from "../../assets/img/icons/mail.svg";
import google from "../../assets/img/icons/google.png";
import facebook from "../../assets/img/icons/facebook.png";
import login from "../../assets/img/login.jpg";
import Users1 from "../../assets/img/icons/users1.svg";

// frontend these wise image import End

import Title from "../../components/Title/Title";

const stations = [
  {
    name: "Head Office",
    subStations: [
      {
        name: "Head Office",
        division: [
          "99341-Information Security, IT Risk Management & Fraud Control Division",
          "99342-Information Technology Division (Business IT)",
          "99343-Information Technology Division (Infrastructure IT)",
          "99344-Information Technology Division (IT Service Management)",
          "99345-Information Technology Division (IT Procurement)",
        ],
      },
    ],
  },
  {
    name: "GMO",
    subStations: [
      {
        name: "Dhaka South",
        division: [
          "Sadarghat",
          "Naya Bazar",
          "Bangshal",
          "Armanitola",
          "Jatrabari",
        ],
      },
      {
        name: "Dhaka North",
        division: ["Banani", "Dhanmondi", "Gulshan", "Badda", "Kafrul"],
      },
    ],
  },
];

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [station, setStation] = useState("");
  const [subStation, setSubStation] = useState("");

  const [division, setDivision] = useState("");

  const [secondStation, setSecondStation] = useState([]);
  const [thirdStation, setThirdStation] = useState([]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [findAdmin, setFindAdmin] = useState(0);
  const { loader, error, message } = useSelector(authSelector);
  const { input, setInput, handleInputChange, formReset } = useForm({
    index: "",
    name: "",
    email: "",
    password: "",
  });

  const handleStationChange = (e) => {
    const selectedStation = e.target.value;
    setStation(selectedStation);
    if (selectedStation !== "-Select-") {
      setSecondStation(
        stations.find((data) => data.name === selectedStation).subStations
      );
      setThirdStation([]);
      setInput(() => ({
        po: "",
        branch: "",
      }));
    } else {
      setSecondStation([]);
      setSubStation("");
      setThirdStation([]);
      setInput(() => ({
        po: "",
        branch: "",
      }));

      // setDivision("");
    }
  };

  const handleSubStationChange = (e) => {
    const selectedSubStation = e.target.value;
    setSubStation(selectedSubStation);
    if (selectedSubStation !== "-Select-") {
      setThirdStation(
        secondStation.find((data) => data.name === selectedSubStation).division
      );
      setDivision("");
      setInput((prevState) => ({
        ...prevState,
        branch: "",
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        branch: "",
      }));
      setThirdStation([]);
    }
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    dispatch(createUserRegister(input));

    // navigate("/account-activation-by-otp");
  };

  // find admin User

  useEffect(() => {
    const adminUser = async () => {
      try {
        const response = await API.get(`/api/v1/user`);

        const findAdmin = response.data.user.filter(
          (data) => (data.role == "super admin") & (data.branch == division)
        );

        setFindAdmin(findAdmin.length);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    };

    adminUser();
  });

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
      <Title title={"POS | Register"} />
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
                    <h3>Create an Account</h3>
                    <h4>Continue where you left off</h4>
                  </div>
                  <div className="form-login">
                    <label>Full Name</label>
                    <div className="form-addons">
                      <input type="text" placeholder="Enter your full name" />
                      <img src={Users1} alt="img" />
                    </div>
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
                    <a className="btn btn-login">Sign Up</a>
                  </div>
                  <div className="signinform text-center">
                    <h4>
                      Already a user?
                      <Link to="/login" className="hover-a" style={{paddingLeft: "4px"}}> 
                        Sign In
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
                          <img
                            src={google}
                            className="me-2"
                            alt="google"
                          />
                          Sign Up using Google
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img
                            src={facebook}
                            className="me-2"
                            alt="google"
                          />
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

export default Register;
