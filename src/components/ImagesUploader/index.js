import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import DragAndDropArea from "../DragAndDropArea";
import ThumbsGallery from "./thumbsGallery";
import { uploadImages } from "../../Redux/actions/imagesAction";
import { SET_THUMBS } from "../../Redux/reducers/imagesReducer";
import { connect } from "react-redux";

const ImagesUploader = ({ uploadImages, thumbs, SET_THUMBS: setThumbs }) => {
  const [files, setFiles] = useState([]);

  const onDrop = files => {
    setThumbs(files.map(f => URL.createObjectURL(f)));
    setFiles(files);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const body = new FormData(e.target);
    body.delete("images");
    files.forEach(file => body.append("images", file));
    uploadImages(body);
    setThumbs([]);
  };

  return (
    <Container>
      <Box py={5}>
        <Typography variant="h4" gutterBottom>
          Upload some images for gallery:
        </Typography>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <DragAndDropArea dropZoneOptions={{ accept: "image/*", onDrop }} />
          <ThumbsGallery images={thumbs} />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};
const mapStateToProps = state => ({
  thumbs: state.images.thumbs
});

export default connect(mapStateToProps, { uploadImages, SET_THUMBS })(
  ImagesUploader
);
