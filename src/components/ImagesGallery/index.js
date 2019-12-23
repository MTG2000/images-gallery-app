import React, { useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ClearBtn from "./ClearBtn";
import { fetchImages } from "../../Redux/actions/imagesAction";
import { connect } from "react-redux";
import { SET_REFRESH } from "../../Redux/reducers/imagesReducer";

const useStyles = makeStyles({
  imgWrapper: {
    width: 350,
    height: 196,
    padding: 4,
    background: "#f1f1f1",
    margin: "0"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top"
  }
});

const ImagesGallery = ({
  images,
  refresh,
  fetchImages,
  SET_REFRESH: setRefresh
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (refresh) {
      fetchImages();
      setRefresh(false);
    }
  }, [refresh, fetchImages, setRefresh]);

  return (
    <>
      <Grid container>
        <Grid container justify="center">
          {images.map((image, index) => (
            <div key={index} className={classes.imgWrapper}>
              <img
                src={image}
                alt="thumb"
                key={index}
                className={classes.img}
              />
            </div>
          ))}
        </Grid>
      </Grid>
      <ClearBtn />
    </>
  );
};

const mapStateToProps = state => ({
  images: state.images.imgsGallery,
  refresh: state.images.refresh
});

export default connect(mapStateToProps, { fetchImages, SET_REFRESH })(
  ImagesGallery
);
