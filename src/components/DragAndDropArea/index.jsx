import React from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  area: ({ isDragActive, isDragAccept, isDragReject }) => ({
    cursor: "pointer",
    flex: 1,
    maxWidth: 800,
    minHeight: 166,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    margin: "20px auto",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#ccc",
    borderStyle: "dashed",
    backgroundColor: "#FFF",
    color: "#333",
    outline: "none",
    transition: "border .24s ease-in-out",

    ...(() =>
      isDragActive
        ? {
            borderColor: "#222",
            backgroundColor: "#acacd5",
            color: "#222"
          }
        : {})(),
    ...(() =>
      isDragAccept
        ? {
            borderColor: "#222",
            backgroundColor: "#76d976",
            color: "#222"
          }
        : {})(),
    ...(() =>
      isDragReject
        ? {
            borderColor: "#222",
            backgroundColor: "#ec7d7d",
            color: "#222"
          }
        : {})()
  })
});

const DragAndDropArea = ({
  defaultText = "Drag 'n' drop some files here, or click to select files",
  dragText = "Drop the files here ...",
  dropZoneOptions = {}
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ ...dropZoneOptions });
  const classes = useStyles({ isDragActive, isDragAccept, isDragReject });

  return (
    <div {...getRootProps()} className={classes.area}>
      <input {...getInputProps()} name="images" />
      <Typography variant="h5">
        {!isDragActive && defaultText}
        {isDragAccept && dragText}
        {isDragReject && "Only files allowed are Images"}
      </Typography>
    </div>
  );
};

export default DragAndDropArea;

//NOTES:
//Remeber that droing files wont have the same effect on the 'input' element as selecting them through the dialog window
//so you should deal with them on the onDrop event
