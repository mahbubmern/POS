import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";
import Departments from "../models/departmentModel.js";
import bcrypt from "bcrypt";
import { fileDeleteFromCloud, fileUploadToCloud } from "../utils/cloudinary.js";
import {
  getPublicID,
  isValidEmail,
  isValidPhoneNumber,
} from "../helpers/helpers.js";

/**
 * @description : get all user
 * @method : GET
 * @access : public
 * @route : '/api/v1/user'
 */
export const getAllUser = asyncHandler(async (req, res) => {
  const user = await Users.find().populate("task");
  
  //check user
  if (user.length === 0) {
    return res.status(404).json({ message: "No User Found" });
  }
  res.status(200).json({ user, message: "User Found Successful" });
});

/**
 * @description : get all user Pending Tasks
 * @method : GET
 * @access : public
 * @route : '/api/v1/user/pending-tasks'
 */
export const getAllUserWithPendingTasks = asyncHandler(async (req, res) => {
  const users = await Users.find().populate("task");

  // Check if users exist
  if (!users) {
    return res.status(404).json({ message: "No User Found" });
  }

  // Calculate pending tasks for each user
  const usersWithPendingTasks = users.map((user) => {
    const pendingTasks =  user.task.filter((task) => task.status === "pending");

    return {
      name: user.name,
      branch : user.branch,
      department : user.department,
      pendingTasksCount: pendingTasks.length,
      pendingTasks: pendingTasks,
    };
  });

  res
    .status(200)
    .json({ usersWithPendingTasks, message: "User Found with Pending Tasks" });
});

// export const getAllUserWithPendingTasks = asyncHandler(async (req, res) => {
//   const users = await Users.find().populate("task");

//   // Check if users exist
//   if (!users) {
//     return res.status(404).json({ message: "No User Found" });
//   }

//   // Calculate pending tasks for each user
//   const usersWithPendingTasks = users.map((user) => {
//     const pendingTasksCount = user.task.reduce((count, task) => {
//       if (task.status === "pending") {
//         count++;
//       }
//       return count;
//     }, 0);

//     return {
//       name: user.name,
//       pendingTasksCount,
//     };
//   });

//   res
//     .status(200)
//     .json({ usersWithPendingTasks, message: "User Found with Pending Tasks" });
// });

/**
 * @description : get single user
 * @method : GET
 * @access : public
 * @route : '/api/v1/user'
 */
export const getSingleUserDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id).populate("department");

  res.status(200).json({
    userDepartment: user.department,
    user,
    message: "User Found Successful",
  });
});

/**
 * @description : create user
 * @method : POST
 * @access : public
 * @route : '/api/v1/user'
 */
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  //data validation

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // password hash
  const createHashPassword = await bcrypt.hash(password, 10);

  //check valid Email
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid Email" });
  }

  //check valid Phone
  if (!isValidPhoneNumber(phone)) {
    return res.status(400).json({ message: "Invalid Phone No" });
  }

  // email check
  const isEmailExists = await Users.findOne({ email });

  if (isEmailExists) {
    return res.status(400).json({ message: "Email Already Exists" });
  }

  // phone check
  const isPhoneExists = await Users.findOne({ phone });

  if (isPhoneExists) {
    return res.status(400).json({ message: "Phone Already Exists" });
  }

  //check file exist

  let photoFile = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);
    photoFile = data.secure_url;
  }

  //user create

  const newUser = await Users.create({
    name,
    email,
    phone,
    password: createHashPassword,
    photo: photoFile,
  });
  // response

  res.status(201).json({ user: newUser, message: "User created Successful" });
});

/**
 * @description : update user
 * @method : PUT/PATCH
 * @access : public
 * @route : '/api/v1/user'
 */
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, index, role, status, department, extraRole } = req.body;

  // Check if the user exists
  const existsUser = await Users.findOne({ _id: id });

  if (!existsUser) {
    return res.status(400).json({
      message: "User Not Exists",
    });
  }

  //Convert department names to ObjectIds
  const departmentIds = await Promise.all(
    department.map(async (dept) => {
      const department = await Departments.findOne({ name: dept });
      if (department) {
        return department._id;
      } else {
        // Create new department if not found
        const newDepartment = new Departments({ name: dept });
        const savedDepartment = await newDepartment.save();
        return savedDepartment._id;
      }
    })
  );

  const userUpdate = await Users.findOneAndUpdate(
    { _id: existsUser._id },
    {
      $set: { name, index, role, status, department: departmentIds, extraRole },
    },
    { new: true }
  );

  if (!userUpdate) {
    return res.status(500).json({ message: "Failed to update user" });
  }

  res.status(200).json({ user: userUpdate, message: "User Update Successful" });
  // const { id } = req.params;

  // const { name, index, role, status, department } = req.body;

  // // check user exists
  // const ExistsUSer = await Users.findOne({ _id: id });

  // if (!ExistsUSer) {
  //   return res.status(400).json({
  //     message: "User Not Exists",
  //   });
  // }

  // // Convert department values to ObjectIds
  // const departmentObjectIds = department.map((dept) => ObjectId(dept));

  // console.log(name, index, role, status, departmentObjectIds);

  // const userUpdate = await Users.findOneAndUpdate(
  //   { _id: ExistsUSer._id },
  //   { $set: { status, role, department: departmentObjectIds } },
  //   { new: true }
  // );

  // if (!userUpdate) {
  //   return res.status(500).json({ message: "Failed to update user" });
  // }

  // res.status(200).json({ user: userUpdate, message: "User Update Successful" });
});

/**
 * @description : delete user
 * @method : DELETE
 * @access : public
 * @route : '/api/v1/user'
 */

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedUser = await Users.findByIdAndDelete(id);

  await fileDeleteFromCloud(getPublicID(deletedUser.photo));

  res
    .status(200)
    .json({ user: deletedUser, message: "User delete Successful" });
});
