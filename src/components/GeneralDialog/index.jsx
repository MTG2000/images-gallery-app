import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import { connect } from "react-redux";
import { CLOSE_DIALOG } from "../../Redux/reducers/dialogReducer";

const GeneralDialog = ({
  open,
  title,
  content,
  handleClose,
  closeDialog,
  maxWidth = "lg"
}) => {
  return (
    <Dialog
      onClose={data => closeDialog(handleClose, data)}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={maxWidth}
    >
      {title && <DialogTitle id="simple-dialog-title">{title}</DialogTitle>}
      {content}
    </Dialog>
  );
};

const mapStateToProps = state => ({
  open: state.dialog.open,
  handleClose: state.dialog.handleClose, //This function is to handle the dialog data result for external use
  title: state.dialog.title,
  content: state.dialog.content
});

const mapDispatchToProps = dispatch => ({
  closeDialog: (onClose, data) => {
    //this func is for making the open state false
    dispatch(CLOSE_DIALOG());
    onClose(data);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralDialog);
