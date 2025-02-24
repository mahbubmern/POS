// import logo from "../../assets/frontend/img/sonali-bank-logo.png";

import { Link, Outlet, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogout } from "../../features/auth/authApiSlice";
// import { useEffect, useState } from "react";
// import createToast from "../../utils/createToast";
// import { authSelector, setEmptyMessage } from "../../features/auth/authSlice";
// import timeAgo from "../../../../utils/timeAgo.js";
// import API from "../../utils/api.js";

// import Avatar from "../../components/Avatar/Avatar";

import logo from  "../../assets/img/logo.png"
import logoSmall from  "../../assets/img/logo-small.png"
import closes from  "../../assets/img/icons/closes.svg"
import search from  "../../assets/img/icons/search.svg"
import us1 from  "../../assets/img/flags/us1.png"
import us from  "../../assets/img/flags/us.png"
import fr from  "../../assets/img/flags/fr.png"
import es from  "../../assets/img/flags/es.png"
import de from  "../../assets/img/flags/de.png"
import notification from  "../../assets/img/icons/notification-bing.svg"
import avator1 from  "../../assets/img/profiles/avator1.jpg"
import avator2 from  "../../assets/img/profiles/avatar-02.jpg"
import avator3 from  "../../assets/img/profiles/avatar-03.jpg"
import avator6 from  "../../assets/img/profiles/avatar-06.jpg"
import avator17 from  "../../assets/img/profiles/avatar-17.jpg"
import avator13 from  "../../assets/img/profiles/avatar-13.jpg"
import logOut from  "../../assets/img/icons/log-out.svg"
import dashboard from  "../../assets/img/icons/dashboard.svg"
import product from  "../../assets/img/icons/product.svg"
import sales1 from  "../../assets/img/icons/sales1.svg"
import purchase1 from  "../../assets/img/icons/purchase1.svg"
import expense1 from  "../../assets/img/icons/expense1.svg"
import quotation1 from  "../../assets/img/icons/quotation1.svg"
import transfer1 from  "../../assets/img/icons/transfer1.svg"
import return1 from  "../../assets/img/icons/return1.svg"
import users1 from  "../../assets/img/icons/users1.svg"
import places from  "../../assets/img/icons/places.svg"
import time from  "../../assets/img/icons/time.svg"
import settings from  "../../assets/img/icons/settings.svg"


const Layout = () => {
  // const location = useLocation();
  // const pathname = location.pathname;
  // const pathParts = pathname.split("/");
  // const lastPathPart = pathParts[pathParts.length - 1];

  // const { error, message, user } = useSelector(authSelector);
  // const dispatch = useDispatch();

  // const [notification, setNotification] = useState([]);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  // const [unReadCount, setUnReadCount] = useState(0);

  // const handleDropdownToggle = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // // handle notification
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/notification/${user._id}`);
  //       // Updating the todo state with the newly fetched todo list
  //       setNotification(
  //         response.data.userNotification.notification
  //           .reverse()
  //           .filter((notification) => notification.status === "pending")
  //       );
  //       const unread = response.data.userNotification.notification.filter(
  //         (notification) => notification.status === "pending"
  //       ).length;
  //       setUnReadCount(unread);
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchData();
  // }),
  //   [notification];

  // const handleLogout = () => {
  //   dispatch(userLogout());
  // };

  // useEffect(() => {
  //   if (message) {
  //     createToast(message, "success");
  //     dispatch(setEmptyMessage());
  //   }
  //   if (error) {
  //     createToast(error);
  //     dispatch(setEmptyMessage());
  //   }
  // }, [message, error, dispatch]);

  // const [activeItem, setActiveItem] = useState(lastPathPart);

  // const handleItemClick = (item) => {
  //   setActiveItem(item);
  // };

  return (
    <>
      <body>
        <div id="global-loader">
          <div className="whirly-loader" />
        </div>
        <div className="main-wrapper">
          <div className="header">
            <div className="header-left active">
              <a href="index.html" className="logo">
                <img src={logo} alt="" />
              </a>
              <a href="index.html" className="logo-small">
                <img src={logoSmall} alt="" />
              </a>
              <a id="toggle_btn" href="javascript:void(0);">
                {" "}
              </a>
            </div>
            <a id="mobile_btn" className="mobile_btn" href="#sidebar">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <ul className="nav user-menu">
              <li className="nav-item">
                <div className="top-nav-search">
                  <a href="javascript:void(0);" className="responsive-search">
                    <i className="fa fa-search" />
                  </a>
                  <form action="#">
                    <div className="searchinputs">
                      <input type="text" placeholder="Search Here ..." />
                      <div className="search-addon">
                        <span>
                          <img src={closes} alt="img" />
                        </span>
                      </div>
                    </div>
                    <a className="btn" id="searchdiv">
                      <img src={search} alt="img" />
                    </a>
                  </form>
                </div>
              </li>
              <li className="nav-item dropdown has-arrow flag-nav">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="javascript:void(0);"
                  role="button"
                >
                  <img src={us1} alt="" height={20} />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src={us} alt="" height={16} />{" "}
                    English
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src={fr} alt="" height={16} />{" "}
                    French
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src={es} alt="" height={16} />{" "}
                    Spanish
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src={de} alt="" height={16} />{" "}
                    German
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                >
                  <img src={notification} alt="img" />
                  <span className="badge rounded-pill">4</span>
                </a>
                <div className="dropdown-menu notifications">
                  <div className="topnav-dropdown-header">
                    <span className="notification-title">Notifications</span>
                    <a href="javascript:void(0)" className="clear-noti">
                      {" "}
                      Clear All{" "}
                    </a>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt=""
                                src={avator2}
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">John Doe</span>{" "}
                                added new task
                                <span className="noti-title">
                                  Patient appointment booking
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  4 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt=""
                                src={avator3}
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Tarah Shropshire
                                </span>
                                changed the task name
                                <span className="noti-title">
                                  Appointment booking with payment gateway
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  6 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt=""
                                src={avator6}
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">Misty Tison</span>{" "}
                                added
                                <span className="noti-title">
                                  Domenic Houston
                                </span>{" "}
                                and
                                <span className="noti-title">
                                  Claire Mapes
                                </span>{" "}
                                to project
                                <span className="noti-title">
                                  Doctor available module
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  8 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt=""
                                src={avator17}
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Rolland Webber
                                </span>
                                completed task
                                <span className="noti-title">
                                  Patient and Doctor video conferencing
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  12 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="activities.html">
                          <div className="media d-flex">
                            <span className="avatar flex-shrink-0">
                              <img
                                alt=""
                                src={avator13}
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                <span className="noti-title">
                                  Bernardo Galaviz
                                </span>
                                added new task
                                <span className="noti-title">
                                  Private chat module
                                </span>
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  2 days ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <a href="activities.html">View all Notifications</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown has-arrow main-drop">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle nav-link userset"
                  data-bs-toggle="dropdown"
                >
                  <span className="user-img">
                    <img src={avator1} alt="" />
                    <span className="status online" />
                  </span>
                </a>
                <div className="dropdown-menu menu-drop-user">
                  <div className="profilename">
                    <div className="profileset">
                      <span className="user-img">
                        <img src={avator1} alt="" />
                        <span className="status online" />
                      </span>
                      <div className="profilesets">
                        <h6>John Doe</h6>
                        <h5>Admin</h5>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <a className="dropdown-item" href="profile.html">
                      <i className="me-2" data-feather="user" /> My Profile
                    </a>
                    <a className="dropdown-item" href="generalsettings.html">
                      <i className="me-2" data-feather="settings" />
                      Settings
                    </a>
                    <hr className="m-0" />
                    <a className="dropdown-item logout pb-0" href="signin.html">
                      <img
                        src={logOut}
                        className="me-2"
                        alt="img"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="dropdown mobile-user-menu">
              <a
                href="javascript:void(0);"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
                <a className="dropdown-item" href="generalsettings.html">
                  Settings
                </a>
                <a className="dropdown-item" href="signin.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="active">
                    <a href="index.html">
                      <img src={dashboard} alt="img" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={product} alt="img" />
                      <span>Product</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="productlist.html">Product List</a>
                      </li>
                      <li>
                        <a href="addproduct.html">Add Product</a>
                      </li>
                      <li>
                        <a href="categorylist.html">Category List</a>
                      </li>
                      <li>
                        <a href="addcategory.html">Add Category</a>
                      </li>
                      <li>
                        <a href="subcategorylist.html">Sub Category List</a>
                      </li>
                      <li>
                        <a href="subaddcategory.html">Add Sub Category</a>
                      </li>
                      <li>
                        <a href="brandlist.html">Brand List</a>
                      </li>
                      <li>
                        <a href="addbrand.html">Add Brand</a>
                      </li>
                      <li>
                        <a href="importproduct.html">Import Products</a>
                      </li>
                      <li>
                        <a href="barcode.html">Print Barcode</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={sales1} alt="img" />
                      <span>Sales</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="saleslist.html">Sales List</a>
                      </li>
                      <li>
                        <a href="pos.html">POS</a>
                      </li>
                      <li>
                        <a href="pos.html">New Sales</a>
                      </li>
                      <li>
                        <a href="salesreturnlists.html">Sales Return List</a>
                      </li>
                      <li>
                        <a href="createsalesreturns.html">New Sales Return</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={purchase1} alt="img" />
                      <span>Purchase</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="purchaselist.html">Purchase List</a>
                      </li>
                      <li>
                        <a href="addpurchase.html">Add Purchase</a>
                      </li>
                      <li>
                        <a href="importpurchase.html">Import Purchase</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={expense1} alt="img" />
                      <span>Expense</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="expenselist.html">Expense List</a>
                      </li>
                      <li>
                        <a href="createexpense.html">Add Expense</a>
                      </li>
                      <li>
                        <a href="expensecategory.html">Expense Category</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={quotation1} alt="img" />
                      <span>Quotation</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="quotationList.html">Quotation List</a>
                      </li>
                      <li>
                        <a href="addquotation.html">Add Quotation</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={transfer1} alt="img" />
                      <span>Transfer</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="transferlist.html">Transfer List</a>
                      </li>
                      <li>
                        <a href="addtransfer.html">Add Transfer </a>
                      </li>
                      <li>
                        <a href="importtransfer.html">Import Transfer </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={return1} alt="img" />
                      <span>Return</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="salesreturnlist.html">Sales Return List</a>
                      </li>
                      <li>
                        <a href="createsalesreturn.html">Add Sales Return </a>
                      </li>
                      <li>
                        <a href="purchasereturnlist.html">
                          Purchase Return List
                        </a>
                      </li>
                      <li>
                        <a href="createpurchasereturn.html">
                          Add Purchase Return{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={users1} alt="img" />
                      <span>People</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="customerlist.html">Customer List</a>
                      </li>
                      <li>
                        <a href="addcustomer.html">Add Customer </a>
                      </li>
                      <li>
                        <a href="supplierlist.html">Supplier List</a>
                      </li>
                      <li>
                        <a href="addsupplier.html">Add Supplier </a>
                      </li>
                      <li>
                        <a href="userlist.html">User List</a>
                      </li>
                      <li>
                        <a href="adduser.html">Add User</a>
                      </li>
                      <li>
                        <a href="storelist.html">Store List</a>
                      </li>
                      <li>
                        <a href="addstore.html">Add Store</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={places} alt="img" />
                      <span>Places</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="newcountry.html">New Country</a>
                      </li>
                      <li>
                        <a href="countrieslist.html">Countries list</a>
                      </li>
                      <li>
                        <a href="newstate.html">New State </a>
                      </li>
                      <li>
                        <a href="statelist.html">State list</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="components.html">
                      <i data-feather="layers" />
                      <span> Components</span>
                    </a>
                  </li>
                  <li>
                    <a href="blankpage.html">
                      <i data-feather="file" />
                      <span> Blank Page</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="alert-octagon" />
                      <span> Error Pages </span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="error-404.html">404 Error </a>
                      </li>
                      <li>
                        <a href="error-500.html">500 Error </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="box" /> <span>Elements </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="sweetalerts.html">Sweet Alerts</a>
                      </li>
                      <li>
                        <a href="tooltip.html">Tooltip</a>
                      </li>
                      <li>
                        <a href="popover.html">Popover</a>
                      </li>
                      <li>
                        <a href="ribbon.html">Ribbon</a>
                      </li>
                      <li>
                        <a href="clipboard.html">Clipboard</a>
                      </li>
                      <li>
                        <a href="drag-drop.html">Drag &amp; Drop</a>
                      </li>
                      <li>
                        <a href="rangeslider.html">Range Slider</a>
                      </li>
                      <li>
                        <a href="rating.html">Rating</a>
                      </li>
                      <li>
                        <a href="toastr.html">Toastr</a>
                      </li>
                      <li>
                        <a href="text-editor.html">Text Editor</a>
                      </li>
                      <li>
                        <a href="counter.html">Counter</a>
                      </li>
                      <li>
                        <a href="scrollbar.html">Scrollbar</a>
                      </li>
                      <li>
                        <a href="spinner.html">Spinner</a>
                      </li>
                      <li>
                        <a href="notification.html">Notification</a>
                      </li>
                      <li>
                        <a href="lightbox.html">Lightbox</a>
                      </li>
                      <li>
                        <a href="stickynote.html">Sticky Note</a>
                      </li>
                      <li>
                        <a href="timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="form-wizard.html">Form Wizard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="bar-chart-2" /> <span> Charts </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="chart-apex.html">Apex Charts</a>
                      </li>
                      <li>
                        <a href="chart-js.html">Chart Js</a>
                      </li>
                      <li>
                        <a href="chart-morris.html">Morris Charts</a>
                      </li>
                      <li>
                        <a href="chart-flot.html">Flot Charts</a>
                      </li>
                      <li>
                        <a href="chart-peity.html">Peity Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="award" />
                      <span> Icons </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="icon-fontawesome.html">Fontawesome Icons</a>
                      </li>
                      <li>
                        <a href="icon-feather.html">Feather Icons</a>
                      </li>
                      <li>
                        <a href="icon-ionic.html">Ionic Icons</a>
                      </li>
                      <li>
                        <a href="icon-material.html">Material Icons</a>
                      </li>
                      <li>
                        <a href="icon-pe7.html">Pe7 Icons</a>
                      </li>
                      <li>
                        <a href="icon-simpleline.html">Simpleline Icons</a>
                      </li>
                      <li>
                        <a href="icon-themify.html">Themify Icons</a>
                      </li>
                      <li>
                        <a href="icon-weather.html">Weather Icons</a>
                      </li>
                      <li>
                        <a href="icon-typicon.html">Typicon Icons</a>
                      </li>
                      <li>
                        <a href="icon-flag.html">Flag Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="columns" /> <span> Forms </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="form-basic-inputs.html">Basic Inputs </a>
                      </li>
                      <li>
                        <a href="form-input-groups.html">Input Groups </a>
                      </li>
                      <li>
                        <a href="form-horizontal.html">Horizontal Form </a>
                      </li>
                      <li>
                        <a href="form-vertical.html"> Vertical Form </a>
                      </li>
                      <li>
                        <a href="form-mask.html">Form Mask </a>
                      </li>
                      <li>
                        <a href="form-validation.html">Form Validation </a>
                      </li>
                      <li>
                        <a href="form-select2.html">Form Select2 </a>
                      </li>
                      <li>
                        <a href="form-fileupload.html">File Upload </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i data-feather="layout" /> <span> Table </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="tables-basic.html">Basic Tables </a>
                      </li>
                      <li>
                        <a href="data-tables.html">Data Table </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={product} alt="img" />
                      <span>Application</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="chat.html">Chat</a>
                      </li>
                      <li>
                        <a href="calendar.html">Calendar</a>
                      </li>
                      <li>
                        <a href="email.html">Email</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={time} alt="img" />
                      <span>Report</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="purchaseorderreport.html">
                          Purchase order report
                        </a>
                      </li>
                      <li>
                        <a href="inventoryreport.html">Inventory Report</a>
                      </li>
                      <li>
                        <a href="salesreport.html">Sales Report</a>
                      </li>
                      <li>
                        <a href="invoicereport.html">Invoice Report</a>
                      </li>
                      <li>
                        <a href="purchasereport.html">Purchase Report</a>
                      </li>
                      <li>
                        <a href="supplierreport.html">Supplier Report</a>
                      </li>
                      <li>
                        <a href="customerreport.html">Customer Report</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={users1} alt="img" />
                      <span>Users</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="newuser.html">New User </a>
                      </li>
                      <li>
                        <a href="userlists.html">Users List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <img src={settings} alt="img" />
                      <span>Settings</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="generalsettings.html">General Settings</a>
                      </li>
                      <li>
                        <a href="emailsettings.html">Email Settings</a>
                      </li>
                      <li>
                        <a href="paymentsettings.html">Payment Settings</a>
                      </li>
                      <li>
                        <a href="currencysettings.html">Currency Settings</a>
                      </li>
                      <li>
                        <a href="grouppermissions.html">Group Permissions</a>
                      </li>
                      <li>
                        <a href="taxrates.html">Tax Rates</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </body>
    </>
  );
};

export default Layout;
