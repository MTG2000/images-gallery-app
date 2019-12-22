import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import DragAndDropArea from "../DragAndDropArea";
import ThumbsGallery from "./thumbsGallery";

const ImagesUploader = ({ onUpload }) => {
  const [thumbs, setThumbs] = useState([]);
  const [files, setFiles] = useState([]);

  const onDrop = files => {
    setThumbs(files.map(f => URL.createObjectURL(f)));
    setFiles(files);
    console.log(files);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const body = new FormData(e.target);
    body.delete("images");
    files.forEach(file => body.append("images", file));

    let response = await fetch("/upload/photos", {
      method: "POST",
      body
    });
    let result = await response.json();
    console.log(result);
    setThumbs([]);
    onUpload();
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

export default ImagesUploader;
