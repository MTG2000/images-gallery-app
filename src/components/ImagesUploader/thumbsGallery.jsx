import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  imgWrapper: {
    width: 144,
    height: 144,
    padding: 10,
    background: "#f1f1f1",
    margin: "20px 40px"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
});

const ThumbsGallery = ({ images = [] }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      {images.map((image, index) => (
        <div key={index} className={classes.imgWrapper}>
          <img src={image} alt="thumb" key={index} className={classes.img} />
        </div>
      ))}
    </Grid>
  );
};

export default ThumbsGallery;
