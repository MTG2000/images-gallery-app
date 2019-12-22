import React, { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container, Box, Typography } from "@material-ui/core";
import ImagesUploader from "./components/ImagesUploader";
import ImagesGallery from "./components/ImagesGallery";

function App() {
  const [images, setImages] = useState([]);
  const [updateImages, setUpdateImages] = useState(true);
  useEffect(() => {
    if (!updateImages) return;
    (async () => {
      const res = await fetch("/images");
      const data = await res.json();
      setImages(data);
      setUpdateImages(false);
    })();
  }, [updateImages]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Box mt={15}>
          <Typography color="primary" variant="h2" component="h6" gutterBottom>
            All Uploaded Images
          </Typography>
          <ImagesGallery images={images} />
          <ImagesUploader onUpload={() => setUpdateImages(true)} />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
