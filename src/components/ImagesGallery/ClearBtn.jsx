import React from "react";
import { Grid, Button } from "@material-ui/core";
import { deleteAllImages } from "../../Redux/actions/imagesAction";
import { SET_REFRESH } from "../../Redux/reducers/imagesReducer";
import { connect } from "react-redux";

const ClearBtn = ({ deleteAllImages, SET_REFRESH: setRefresh }) => {
  const handleDelete = async () => {
    deleteAllImages();
    setRefresh(true);
  };

  return (
    <Grid container justify="flex-end">
      <Button
        variant="contained"
        style={{ background: "red", color: "#FFF" }}
        onClick={handleDelete}
      >
        Delete All
      </Button>
    </Grid>
  );
};

export default connect(null, { deleteAllImages, SET_REFRESH })(ClearBtn);
