import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  imgWrapper: ({ width, height, maxWidth, maxHeight, pointerOnHover }) => ({
    width,
    height,
    maxWidth,
    maxHeight,
    padding: 2,
    background: "#f1f1f1",
    margin: "0",
    "&:hover": {
      cursor: pointerOnHover ? "pointer" : "initial"
    }
  }),
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top"
  }
});

const Image = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  maxWidth = "none",
  maxHeight = "none",
  imgWrapperStyle = {},
  imgStyle = {},
  pointerOnHover = false
}) => {
  const classes = useStyles({
    pointerOnHover,
    width,
    height,
    maxWidth,
    maxHeight
  });

  return (
    <div className={classes.imgWrapper} style={imgWrapperStyle}>
      <img src={src} alt={alt} className={classes.img} style={imgStyle} />
    </div>
  );
};

export default Image;
