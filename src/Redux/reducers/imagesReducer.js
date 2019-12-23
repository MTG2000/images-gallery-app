import { createSlice } from "@reduxjs/redux-toolkit";

const initialState = {
  refresh: true,
  thumbs: [],
  imgsGallery: []
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    SET_IMAGES: (state, action) => {
      state.imgsGallery = action.payload;
    },
    SET_REFRESH: (state, action) => {
      state.refresh = action.payload;
    },
    SET_THUMBS: (state, action) => {
      state.thumbs = action.payload;
    }
  },
  extraReducers: {
    //Extra Reducers are reducers that wont have Auto-generated actions creaters and naming-prefix
  }
});

export const { SET_IMAGES, SET_REFRESH, SET_THUMBS } = imagesSlice.actions;

const imagesReducer = imagesSlice.reducer;
export default imagesReducer;
