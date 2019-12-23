import { configureStore, getDefaultMiddleware } from "@reduxjs/redux-toolkit";
import imagesReducer from "./reducers/imagesReducer";
import apiMiddleware from "./middlewares/apiMiddleware";

const defaultMiddlewars = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  middleware: [...defaultMiddlewars, apiMiddleware],
  reducer: {
    images: imagesReducer
  }
});

export default store;
