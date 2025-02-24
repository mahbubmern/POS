import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../features/auth/authSlice";
import "./Dashboard.css";

// import PendingDatatable from "../../components/Datatables/PendingDatatable";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import createToast from "../../utils/createToast";
import {
  createUserTodo,
  deleteTodo,
  updateTodo,
} from "../../features/todo/todoApiSlice";
import {
  setEmptyTodoMessage,
  todoSelector,
} from "../../features/todo/todoSlice";

import BarChart from "../../components/Chart/BarChart";
import API from "../../utils/api";
import Title from "../../components/Title/Title";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-buttons-dt";
import Swal from "sweetalert2";


import dash1 from "../../assets/img/icons/dash1.svg"
import dash2 from "../../assets/img/icons/dash2.svg"
import dash3 from "../../assets/img/icons/dash3.svg"
import dash4 from "../../assets/img/icons/dash4.svg"
import dropdown from "../../assets/img/icons/dropdown.svg"
import product2 from "../../assets/img/product/product2.jpg"
import product22 from "../../assets/img/product/product22.jpg"
import product23 from "../../assets/img/product/product23.jpg"
import product24 from "../../assets/img/product/product24.jpg"
import product6 from "../../assets/img/product/product6.jpg"
import product3 from "../../assets/img/product/product3.jpg"
import product4 from "../../assets/img/product/product4.jpg"
import product5 from "../../assets/img/product/product5.jpg"


const Dashboard = () => {
  //Data form Databse for User, Incoming File, Outgoing File, Pending File
  // User Count
  // const [userList, setUserList] = useState([]);
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/user`);
  //       setUserList(response.data.user.length);
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchUser(); // Call fetchUser inside useEffect
  // }, []);

  // //incoming File Count
  // const [incomingList, setIncomingList] = useState([]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/incoming`);
  //       setIncomingList(response.data.incomingFile.length);
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchUser(); // Call fetchUser inside useEffect
  // }, []);

  // //outgoing File Count
  // const [outgoingList, setOutgoingList] = useState([]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/outgoing`);
  //       setOutgoingList(response.data.outgoingFile.length);
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchUser(); // Call fetchUser inside useEffect
  // }, []);

  // const { user } = useSelector(authSelector);
  // const { todoMessage, todoError } = useSelector(todoSelector);
  // const dispatch = useDispatch();

  // const [editModalOpen, setEditModalOpen] = useState(false);

  // const [todo, setTodo] = useState(null);

  // // user Wise Pending Task

  // const [userWisePendingTask, setUserWisePendingTask] = useState([]);
  // const [viewPendingTaskModal, setViewPendingTaskModal] = useState(false);
  // const [viewPendingTask, setViewPendingTask] = useState([]);

  // // api call

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/user/users/pending-tasks`);

  //       // Updating the todo state with the newly fetched todo list
  //       setUserWisePendingTask(
  //         response.data.usersWithPendingTasks
  //           .filter((data) =>
  //             data.department.some((dept) => user.department.includes(dept))
  //           )
  //           .reverse()
  //       );
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  // const handleViewPendingTask = (item) => {
  //   setViewPendingTaskModal(true);
  //   setViewPendingTask(item.pendingTasks);
  // };

  // const pendingModalClose = () => {
  //   setViewPendingTaskModal(false);
  // };

  // // complete todo status and incomplete todo status count

  // const TotalCount = todo ? todo.length : 0;
  // const completedCount = todo
  //   ? todo.filter((item) => item.status === "complete").length
  //   : 0;
  // const incompleteCount = todo
  //   ? todo.filter((item) => item.status === "incomplete").length
  //   : 0;

  // // chart data
  // const chartData = {
  //   labels: ["User", "Incoming", "Outgoing", "Todos"],
  //   datasets: [
  //     {
  //       label: "Number of Count",
  //       data: [userList, incomingList, outgoingList, TotalCount],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const [currentTodo, setCurrentTodo] = useState(null);

  // const [input, setInput] = useState({
  //   id: user._id,
  //   title: "",
  // });

  // const handleInputChange = (e) => {
  //   setInput((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // // handle Todo Create form

  // const handleTodoForm = async (e) => {
  //   e.preventDefault();
  //   // Dispatching the action to create a new todo
  //   await dispatch(createUserTodo(input));
  //   // Fetching updated todo list after adding a new todo
  //   const response = await API.get(`/api/v1/todo/${user._id}`);

  //   // Updating the todo state with the newly fetched todo list
  //   setTodo(response.data.userTodo.todos.reverse());
  // };

  // useEffect(() => {
  //   if (todoMessage) {
  //     createToast(todoMessage, "success");
  //     dispatch(setEmptyTodoMessage());
  //     setInput({
  //       id: user._id,
  //       title: "",
  //     });
  //   }
  //   if (todoError) {
  //     createToast(todoError);
  //     dispatch(setEmptyTodoMessage());
  //   }
  // }, [todoMessage, todoError, dispatch]);

  // // hande todo edit

  // const handleEditTodo = (item) => {
  //   // Set the current todo being edited when the "Edit" button is clicked
  //   setCurrentTodo(item);
  //   modalOpen();
  // };

  // // edit todo form submit

  // const handleEditTodoForm = async (e) => {
  //   e.preventDefault();
  //   await dispatch(updateTodo(currentTodo));
  //   // Fetching updated todo list after adding a new todo
  //   const response = await API.get(`/api/v1/todo/${user._id}`);
  //   // Updating the todo state with the newly fetched todo list
  //   setTodo(response.data.userTodo.todos.reverse());
  //   closeModal();
  // };

  // // handle delete Todo
  // const handleDeleteTodo = async (item) => {
  //   // Merge user._id with item
  //   const data = {
  //     userId: user._id,
  //     todoId: item._id,
  //   };

  //   // Dispatch the delete action with the merged data

  //   const deleteResponse = await dispatch(deleteTodo(data));

  //   if (deleteResponse) {
  //     setTodo((prevTodo) => prevTodo.filter((todos) => todos._id !== item._id));
  //   }

  //   // Updating the todo state with the newly fetched todo list
  //   // setTodo(response.data.userTodo.todos.reverse());
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/todo/${user._id}`);
  //       // Updating the todo state with the newly fetched todo list
  //       setTodo(response.data.userTodo.todos.reverse());
  //     } catch (error) {
  //       throw new Error(error.response.data.message);
  //     }
  //   };

  //   fetchData();
  // });

  // // const pendingTaskModalOpen = ()=>{
  // //   setViewPendingTaskModal(true)
  // // }

  // const modalOpen = () => {
  //   // open the modal
  //   setEditModalOpen(true);
  // };

  // const closeModal = () => {
  //   // Close the modal
  //   setEditModalOpen(false);
  // };

  // const [viewFileModal, setViewFileModal] = useState(false);
  // const [fullscreen, setFullscreen] = useState(true);

  // // const [pdfUrl, setPdfUrl] = useState(null);

  // const handgleFileView = (fileUrl) => {
  //   const fileName = fileUrl;
  //   if (fileName == null) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "No PDF file is attached here.",
  //     });
  //     return;
  //   }
  //   const halffilepath = `http://localhost:5050/files`;
  //   const filePath = `${halffilepath}/${fileName}`;
  //   window.open(filePath, "_blank");
  //   // setViewFileModal(true);
  //   // setPdfUrl(fileUrl);
  // };

  // const viewFileModalClose = () => {
  //   setViewFileModal(false);
  // };

  // // handle View Button

  // const handleView = (row) => {
  //   const fileName = row && row.file.props.children.props.children;
  //   if (fileName == null) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "No PDF file is attached here.",
  //     });
  //     return;
  //   }
  //   const halffilepath = `http://localhost:5050/files`;
  //   const filePath = `${halffilepath}/${fileName}`;
  //   window.open(filePath, "_blank");
  // };

  // handle edit button

  return (
    <>
      <Title title={"POS | Dashboard"} />

      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget">
                <div className="dash-widgetimg">
                  <span>
                    <img src={dash1} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <span className="counters" data-count={307144.0}>
                      $307,144.00
                    </span>
                  </h5>
                  <h6>Total Purchase Due</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash1">
                <div className="dash-widgetimg">
                  <span>
                    <img src={dash2} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <span className="counters" data-count={4385.0}>
                      $4,385.00
                    </span>
                  </h5>
                  <h6>Total Sales Due</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash2">
                <div className="dash-widgetimg">
                  <span>
                    <img src={dash3} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <span className="counters" data-count="385656.50">
                      385,656.50
                    </span>
                  </h5>
                  <h6>Total Sale Amount</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="dash-widget dash3">
                <div className="dash-widgetimg">
                  <span>
                    <img src={dash4} alt="img" />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <span className="counters" data-count={40000.0}>
                      400.00
                    </span>
                  </h5>
                  <h6>Total Sale Amount</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Suppliers</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user-check" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Purchase Invoice</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file-text" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>105</h4>
                  <h5>Sales Invoice</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                  <div className="graph-sets">
                    <ul>
                      <li>
                        <span>Sales</span>
                      </li>
                      <li>
                        <span>Purchase</span>
                      </li>
                    </ul>
                    <div className="dropdown">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        2022
                        <img
                          src={dropdown}
                          alt="img"
                          className="ms-2"
                        />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            2022
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            2021
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            2020
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="sales_charts" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Recently Added Products</h4>
                  <div className="dropdown">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a href="productlist.html" className="dropdown-item">
                          Product List
                        </a>
                      </li>
                      <li>
                        <a href="addproduct.html" className="dropdown-item">
                          Product Add
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive dataview">
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th>Sno</th>
                          <th>Products</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="productimgname">
                            <a href="productlist.html" className="product-img">
                              <img
                                src={product22}
                                alt="product"
                              />
                            </a>
                            <a href="productlist.html">Apple Earpods</a>
                          </td>
                          <td>$891.2</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className="productimgname">
                            <a href="productlist.html" className="product-img">
                              <img
                                src={product23}
                                alt="product"
                              />
                            </a>
                            <a href="productlist.html">iPhone 11</a>
                          </td>
                          <td>$668.51</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className="productimgname">
                            <a href="productlist.html" className="product-img">
                              <img
                                src={product24}
                                alt="product"
                              />
                            </a>
                            <a href="productlist.html">samsung</a>
                          </td>
                          <td>$522.29</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td className="productimgname">
                            <a href="productlist.html" className="product-img">
                              <img
                                src={product6}
                                alt="product"
                              />
                            </a>
                            <a href="productlist.html">Macbook Pro</a>
                          </td>
                          <td>$291.01</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <h4 className="card-title">Expired Products</h4>
              <div className="table-responsive dataview">
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th>SNo</th>
                      <th>Product Code</th>
                      <th>Product Name</th>
                      <th>Brand Name</th>
                      <th>Category Name</th>
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a href="javascript:void(0);">IT0001</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={product2}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Orange</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>12-12-2022</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a href="javascript:void(0);">IT0002</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={product3}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Pineapple</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>25-11-2022</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a href="javascript:void(0);">IT0003</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={product4}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Stawberry</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>19-11-2022</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <a href="javascript:void(0);">IT0004</a>
                      </td>
                      <td className="productimgname">
                        <a className="product-img" href="productlist.html">
                          <img
                            src={product5}
                            alt="product"
                          />
                        </a>
                        <a href="productlist.html">Avocat</a>
                      </td>
                      <td>N/D</td>
                      <td>Fruits</td>
                      <td>20-11-2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
