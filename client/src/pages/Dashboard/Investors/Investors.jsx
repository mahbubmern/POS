import { useMemo, useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.jsx";
// import Example from "../../../components/Datatables/Datatables";
// import Datatables from "../../../components/Datatables/Datatables";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

import {
  formatDateToDDMMYYYY,
  formatTimeToHHMMSS,
} from "../../../utils/ConvertTime.js";
import { useForm } from "../../../hooks/useForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmptyMessage,
  userSelector,
} from "../../../features/users/userSlice.js";
import createToast from "../../../utils/createToast.js";
import {
  getAllUser,
  updateUser,
} from "../../../features/users/userApiSlice.js";
import { authSelector } from "../../../features/auth/authSlice.js";
import API from "../../../utils/api.js";

import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-buttons-dt";
import Title from "../../../components/Title/Title.jsx";

//theme Image start
import plus from "../../../assets/img/icons/plus.svg";
import searchwhite from "../../../assets/img/icons/search-white.svg";
import filter from "../../../assets/img/icons/filter.svg";
import closes from "../../../assets/img/icons/closes.svg";
import pdf from "../../../assets/img/icons/pdf.svg";
import excel from "../../../assets/img/icons/excel.svg";
import printer from "../../../assets/img/icons/printer.svg";
import product1 from "../../../assets/img/product/product1.jpg";
import product2 from "../../../assets/img/product/product2.jpg";
import product3 from "../../../assets/img/product/product3.jpg";
import product4 from "../../../assets/img/product/product4.jpg";
import product5 from "../../../assets/img/product/product5.jpg";
import product6 from "../../../assets/img/product/product6.jpg";
import product7 from "../../../assets/img/product/product7.jpg";
import product8 from "../../../assets/img/product/product8.jpg";
import product9 from "../../../assets/img/product/product9.jpg";
import product11 from "../../../assets/img/product/product11.jpg";
import product17 from "../../../assets/img/product/product17.jpg";
import eye from "../../../assets/img/icons/eye.svg";
import edit from "../../../assets/img/icons/edit.svg";
import delete1 from "../../../assets/img/icons/delete.svg";

//theme Image end
const Investors = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector(authSelector);
  // const { loader, error, message } = useSelector(userSelector);

  // const { input, setInput, handleInputChange } = useForm({
  //   id: "",
  //   index: "",
  //   name: "",
  //   email: "",
  //   role: "",
  //   status: "", // Add status field to the initial state
  // });

  // // Function to handle changes in select inputs
  // const handleSelectChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [name]: value,
  //   }));
  // };

  // // handle checkbox value
  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;

  //   if (checked) {
  //     setSelectedDepartments([...selectedDepartments, name]);
  //   } else {
  //     setSelectedDepartments(
  //       selectedDepartments.filter((dept) => dept !== name)
  //     );
  //   }
  // };

  // const handleEditUserModalForm = async (e) => {
  //   e.preventDefault();
  //   const { name, index, role, status, _id } = input;
  //   const formData = {
  //     name,
  //     index,
  //     role,
  //     status,
  //     department: selectedDepartments,
  //     extraRole: assignedPa,
  //     _id,
  //   };

  //   // Save the current page index
  //   const table = $(".datatable").DataTable();
  //   const currentPage = table.page();

  //   // Convert status to boolean
  //   // Dispatch the updateUser action
  //   await dispatch(updateUser(formData));

  //   // Fetch the updated data from the server
  //   try {
  //     const response = await API.get("/api/v1/user");
  //     const sortedData = response.data.user.reverse();
  //     const filteredData = sortedData.filter(
  //       (data) => data.branch == user.branch
  //     );
  //     setData(filteredData); // Update the table data state with the updated data
  //     closeEditModal(); // Close the edit modal after successful update

  //     // Update the DataTable with the new data without resetting the page
  //     table.clear().rows.add(filteredData).draw(false);

  //     // Restore the page index
  //     table.page(currentPage).draw(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     createToast("Error updating user information", "error");
  //   }
  // };

  // useEffect(() => {
  //   if (message) {
  //     createToast(message, "success");
  //     dispatch(setEmptyMessage());
  //     setIsEditModalOpen(false);
  //   }
  //   if (error) {
  //     createToast(error);
  //     dispatch(setEmptyMessage());
  //   }
  // }, [message, error, dispatch]);

  // const [data, setData] = useState("");
  // const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user
  // const [isModalOpen, setIsModalOpen] = useState(false); // State to control the visibility of the modal
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control the visibility of the modal
  // const [editSelectedUser, setEditSelectedUser] = useState(null); // State to control the visibility of the modal
  // const [selectedDepartments, setSelectedDepartments] = useState([]);
  // const [departments, setDepartments] = useState([]);
  // const [viewDepartment, setViewDepartment] = useState([]);
  // const [pa, setPa] = useState(false);
  // const [assignedPa, setAssignedPa] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await API.get("/api/v1/user");
  //       const sortedData = response.data.user.reverse();

  //       if (user.role === "super admin") {
  //         setData(sortedData.filter((data) => data.branch === user.branch));

  //       } else {
  //         setData(
  //           sortedData.filter((data) =>
  //             data.department.some((dept) => user.department.includes(dept))
  //           )
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (editSelectedUser) {
  //     const fetchUserDepartmentData = async () => {
  //       try {
  //         const response = await API.get(
  //           `/api/v1/user/${editSelectedUser._id}`
  //         );
  //         const sortedData = response.data.userDepartment;
  //         const desiredDepartment = sortedData.map((item) => item.name);
  //         setSelectedDepartments(desiredDepartment || []);
  //         setPa(response.data.user.extraRole || "");
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     setInput(editSelectedUser);

  //     fetchUserDepartmentData();
  //   }
  // }, [editSelectedUser]);

  // // useEffect for Displaying User Department when view Button is Clicked

  // useEffect(() => {
  //   if (selectedUser) {
  //     const fetchUserDepartmentData = async () => {
  //       try {
  //         const response = await API.get(`/api/v1/user/${selectedUser._id}`);
  //         const sortedData = response.data.userDepartment;
  //         const desiredDepartment = sortedData.map((item) => item.name);
  //         setViewDepartment(desiredDepartment || []);
  //         setPa(response.data.user.extraRole || "");
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchUserDepartmentData();
  //   }
  // }, [selectedUser]);

  // const handleView = (row) => {
  //   setSelectedUser(row);
  //   setIsModalOpen(true);
  // };

  // //Function to handle edit button click
  // const handleEdit = (row) => {
  //   if (row) {
  //     setEditSelectedUser(row);
  //     setIsEditModalOpen(true);
  //     setInput(row);
  //   }
  // };

  // const closeModal = () => {
  //   // Close the modal
  //   setIsModalOpen(false);
  // };

  // const closeEditModal = () => {
  //   // Close the modal
  //   setIsEditModalOpen(false);
  // };

  // //toggle PA

  // const switchToToggle = (e) => {
  //   const { name, checked } = e.target;
  //   setPa(checked);
  //   setAssignedPa(checked ? name : null);
  // };

  // // users datatable
  // useEffect(() => {
  //   // Initialize DataTable with buttons
  //   const table = $(".datatable").DataTable({
  //     data: data,
  //     columns: [
  //       {
  //         data: "name",
  //         title: "Name",
  //         render: (data) => {
  //           return `<div class="subject-column">
  //                 <div class="subject-text" >
  //                 ${data}
  //                 </div>
  //                 <div class="tooltip">${data}</div>
  //               </div>`;
  //         },
  //       },
  //       { data: "index", title: "Index" },
  //       {
  //         data: "email",
  //         title: "E-mail",
  //         render: (data) => {
  //           return `<div class="subject-column">
  //                 <div class="subject-text" >
  //                 ${data}
  //                 </div>
  //                 <div class="tooltip">${data}</div>
  //               </div>`;
  //         },
  //       },
  //       { data: "role", title: "Role" },
  //       {
  //         data: "status",
  //         title: "Status",
  //         render: (data) => {
  //           return data === "Active"
  //             ? '<span class="badge bg-success">Active</span>'
  //             : '<span class="badge bg-danger">Blocked</span>';
  //         },
  //       },
  //       {
  //         data: null,
  //         title: "Actions",
  //         render: (data) => {
  //           if (user.role == "super admin") {
  //             return `<div class="actions">
  //               <button class="btn btn-sm bg-success-light view-btn">
  //                 <i class="fe fe-eye"></i> View
  //               </button>
  //               &nbsp;
  //               <button class="btn btn-sm bg-warning-light edit-btn">
  //                 <i class="fe fe-pencil"></i> Edit
  //               </button>
  //             </div>`;
  //           } else {
  //             return `
  //             <div class="actions">
  //               <button class="btn btn-sm bg-success-light view-btn">
  //                 <i class="fe fe-pencil"></i> View
  //               </button>
  //             </div>`;
  //           }
  //         },
  //       },
  //     ],
  //     destroy: true,
  //     layout: {
  //       topStart: {
  //         buttons: ["copy", "csv", "excel", "pdf", "print"],
  //       },
  //     },
  //   });

  //   // View button handler
  //   $(".datatable tbody").on("click", ".view-btn", function () {
  //     const row = table.row($(this).closest("tr")).data();
  //     handleView(row);
  //   });

  //   // Edit button handler
  //   $(".datatable tbody").on("click", ".edit-btn", function () {
  //     const row = table.row($(this).closest("tr")).data();
  //     handleEdit(row);
  //   });

  //   // Cleanup function to destroy the DataTable on unmount
  //   return () => {
  //     table.destroy();
  //   };
  // }, [data]);

  // // Department Name fetch by Divisional Super Admin

  // useEffect(() => {
  //   const fetchUserDepartment = async () => {
  //     try {
  //       const response = await API.get(`/api/v1/user/${user._id}`);
  //       const sortedData = response.data.userDepartment.reverse();
  //       setDepartments(sortedData.map((dept) => dept.name));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchUserDepartment();
  // }, [user._id]);

  return (
    <>
      <Title title={"POS | Investors"} />

      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product List</h4>
              <h6>Manage your products</h6>
            </div>
            <div className="page-btn">
              <a href="addproduct.html" className="btn btn-added">
                <img src={plus} alt="img" className="me-1" />
                Add New Product
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <a className="btn btn-filter" id="filter_search">
                      <img src={filter} alt="img" />
                      <span>
                        <img src={closes} alt="img" />
                      </span>
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img src={searchwhite} alt="img" />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img src={pdf} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img src={excel} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img src={printer} alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-0" id="filter_inputs">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Product</option>
                              <option>Macbook pro</option>
                              <option>Orange</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Category</option>
                              <option>Computers</option>
                              <option>Fruits</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Choose Sub Category</option>
                              <option>Computer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12">
                          <div className="form-group">
                            <select className="select">
                              <option>Brand</option>
                              <option>N/D</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-12 ">
                          <div className="form-group">
                            <select className="select">
                              <option>Price</option>
                              <option>150.00</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-6 col-12">
                          <div className="form-group">
                            <a className="btn btn-filters ms-auto">
                              <img src={searchwhite} alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks" />
                        </label>
                      </th>
                      <th>Product Name</th>
                      <th>SKU</th>
                      <th>Category </th>
                      <th>Brand</th>
                      <th>price</th>
                      <th>Unit</th>
                      <th>Qty</th>
                      <th>Created By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product1} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Macbook pro</a>
                      </td>
                      <td>PT001</td>
                      <td>Computers</td>
                      <td>N/D</td>
                      <td>1500.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product2} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Orange</a>
                      </td>
                      <td>PT002</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product3} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Pineapple</a>
                      </td>
                      <td>PT003</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product4} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Strawberry</a>
                      </td>
                      <td>PT004</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product5} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Avocat</a>
                      </td>
                      <td>PT005</td>
                      <td>Accessories</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>150.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product6} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Macbook Pro</a>
                      </td>
                      <td>PT006</td>
                      <td>Shoes</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product7} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Apple Earpods</a>
                      </td>
                      <td>PT007</td>
                      <td>Shoes</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product8} alt="product" />
                        </a>
                        <a href="javascript:void(0);">iPhone 11 </a>
                      </td>
                      <td>PT008</td>
                      <td>Fruits</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product9} alt="product" />
                        </a>
                        <a href="javascript:void(0);">samsung </a>
                      </td>
                      <td>PT009</td>
                      <td>Earphones</td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>pc</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product11} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Banana</a>
                      </td>
                      <td>PT0010</td>
                      <td>Health Care </td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>kg</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td className="productimgname">
                        <a href="javascript:void(0);" className="product-img">
                          <img src={product17} alt="product" />
                        </a>
                        <a href="javascript:void(0);">Limon</a>
                      </td>
                      <td>PT0011</td>
                      <td>Health Care </td>
                      <td>N/D</td>
                      <td>10.00</td>
                      <td>kg</td>
                      <td>100.00</td>
                      <td>Admin</td>
                      <td>
                        <a className="me-3" href="product-details.html">
                          <img src={eye} alt="img" />
                        </a>
                        <a className="me-3" href="editproduct.html">
                          <img src={edit} alt="img" />
                        </a>
                        <a className="confirm-text" href="javascript:void(0);">
                          <img src={delete1} alt="img" />
                        </a>
                      </td>
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

export default Investors;
