import React from "react";
import { Grid, Button } from "@material-ui/core";

const ClearBtn = () => {
  const handleDelete = async () => {
    let response = await fetch("/images/all", {
      method: "DELETE"
    });
    let result = await response.json();
    console.log(result);
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

export default ClearBtn;
