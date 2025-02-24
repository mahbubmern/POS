import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

// create folder

export const createFolder = createAsyncThunk(
  "folder/createFolder",
  async (data) => {
    try {
      const response = await API.post(`/api/v1/dashboard/filemanager`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get User folder

export const getUserFolders = createAsyncThunk(
  "folders/getUserFolders",
  async () => {
    try {
      const response = await API.get(`/api/v1/dashboard/filemanager`);
      
      
      return response.data;

    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

