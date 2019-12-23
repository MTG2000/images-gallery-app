import { createSlice } from "@reduxjs/redux-toolkit";

const initialState = {
  open: false,
  handleClose: () => {},
  content: "Hello",
  title: ""
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    OPEN_DIALOG: (state, action) => {
      state.open = true;

      const { handleClose = () => {}, content, title } = action.payload;

      state.title = title;
      state.content = content;
      state.handleClose = data => {
        handleClose(data);
      };
    },

    CLOSE_DIALOG: (state, action) => {
      state.open = false;
    }
  },
  extraReducers: {
    //Extra Reducers are reducers that wont have Auto-generated actions creaters and naming-prefix
  }
});

export const { OPEN_DIALOG, CLOSE_DIALOG } = dialogSlice.actions;

const dialogReducer = dialogSlice.reducer;
export default dialogReducer;
