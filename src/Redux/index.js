import { configureStore, getDefaultMiddleware } from "@reduxjs/redux-toolkit";
import imagesReducer from "./reducers/imagesReducer";
import apiMiddleware from "./middlewares/apiMiddleware";
import dialogReducer from "./reducers/dialogReducer";

const defaultMiddlewars = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  middleware: [...defaultMiddlewars, apiMiddleware],
  reducer: {
    images: imagesReducer,
    dialog: dialogReducer
  }
});

export default store;
