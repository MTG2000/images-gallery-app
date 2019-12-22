import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ClearBtn from "./ClearBtn";

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

const ImagesGallery = ({ images = [] }) => {
  const classes = useStyles();
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

export default ImagesGallery;
