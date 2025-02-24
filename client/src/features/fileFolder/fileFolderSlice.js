// create slice

import { createSlice } from "@reduxjs/toolkit";
import { getUserFolders, createFolder } from "./fileFolderApiSlice";

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [],
    folderMessage: null,
    folderError: null,
    folderLoader: false,
  },
  reducers: {
    setEmptyFolderMessage : (state) =>{
      state.folderMessage = null,
      state.folderError = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFolder.pending, (state) => {
        state.folderLoader = true;
      })
      .addCase(createFolder.fulfilled, (state, action) => {
        state.folderLoader = false;
        state.folders = [...action.payload.folders, action.payload];
        state.folderMessage = action.payload.message
      })
      .addCase(createFolder.rejected, (state, action) => {
        state.folderLoader = false;
        state.folderError = action.error.message;
      })

      //get All User

      .addCase(getUserFolders.pending, (state) => {
        state.folderLoader = true;
      })
      .addCase(getUserFolders.fulfilled, (state, action) => {
        state.folderLoader = false;
        state.folders = [...action.payload.folders];
      })
      .addCase(getUserFolders.rejected, (state, action) => {
        state.folderLoader = false;
        state.folderError = action.error.message;
      })
      ;
  },
});



//selector export

export const folderSelector = (state) => state.folders;

//actions export

export const {setEmptyFolderMessage} = folderSlice.actions;

//reducer export

export default folderSlice.reducer;

