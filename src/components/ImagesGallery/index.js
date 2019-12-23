import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import ClearBtn from "./ClearBtn";
import { fetchImages } from "../../Redux/actions/imagesAction";
import { connect } from "react-redux";
import { SET_REFRESH } from "../../Redux/reducers/imagesReducer";
import Image from "../Image";
import { OPEN_DIALOG } from "../../Redux/reducers/dialogReducer";

const ImagesGallery = ({
  images,
  refresh,
  fetchImages,
  SET_REFRESH: setRefresh,
  OPEN_DIALOG
}) => {
  useEffect(() => {
    if (refresh) {
      fetchImages();
      setRefresh(false);
    }
  }, [refresh, fetchImages, setRefresh]);

  const handleImageClick = src => {
    OPEN_DIALOG({
      content: <Image src={src} />
    });
  };

  return (
    <>
      <Grid container>
        <Grid container justify="center">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)}>
              <Image
                src={image}
                width={350}
                height={196}
                imgWrapperStyle={{ padding: 4 }}
                pointerOnHover
              />
            </div>
          ))}
        </Grid>
      </Grid>
      <Box py={2} />
      <ClearBtn />
    </>
  );
};

const mapStateToProps = state => ({
  images: state.images.imgsGallery,
  refresh: state.images.refresh
});

export default connect(mapStateToProps, {
  fetchImages,
  SET_REFRESH,
  OPEN_DIALOG
})(ImagesGallery);
