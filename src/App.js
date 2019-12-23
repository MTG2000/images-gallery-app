import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container, Box, Typography } from "@material-ui/core";
import ImagesUploader from "./components/ImagesUploader";
import ImagesGallery from "./components/ImagesGallery";
import GeneralDialog from "./components/GeneralDialog";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <GeneralDialog />
        <Box mt={15}>
          <Typography color="primary" variant="h2" component="h6" gutterBottom>
            All Uploaded Images
          </Typography>
          <ImagesGallery />
          <ImagesUploader />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
