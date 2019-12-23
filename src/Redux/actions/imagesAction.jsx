import { apiAction } from "../middlewares/apiMiddleware";
import { SET_IMAGES, SET_REFRESH } from "../reducers/imagesReducer";

export const label_fetchAllImages = "fetch-all-images";
export const label_uploadImages = "upload-images";
export const label_deleteAllImages = "delete-all-images";

export const fetchImages = () =>
  apiAction({
    url: "/images",
    method: "GET",
    onSuccess: SET_IMAGES,
    label: label_fetchAllImages
  });

export const uploadImages = frmData =>
  apiAction({
    url: "/upload/photos",
    method: "POST",
    onSuccess: () => SET_REFRESH(true),
    data: frmData,
    label: label_fetchAllImages
  });

export const deleteAllImages = () =>
  apiAction({
    url: "/images/all",
    method: "DELETE",
    onSuccess: () => SET_REFRESH(true),
    label: label_deleteAllImages
  });
