const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs-extra");
const uuidv4 = require("uuid/v4");

const imgsStorage = "public/localStorage/photos";

// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, "public/localStorage/photos"); //The firs param for next() is error
  },
  filename: function(req, file, next) {
    const ext = file.mimetype.split("/")[1];
    next(null, `${file.fieldname}-${Date.now()}.${ext}`);
  }
});

const upload = multer({ storage: storage });

const uploadImages = multer({
  // storage: storage, //If you enable this then it will alwasy begin with storing your images
  fileFilter: function(req, file, next) {
    // if (!file) next(false);
    const img = file.mimetype.startsWith("image/");
    if (img) {
      next(null, true);
    } else {
      console.log("Not Image !!");
      next(false);
    }
  }
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, imgsStorage)));

app.post("/upload/photos", uploadImages.array("images"), async (req, res) => {
  const files = req.files;
  if (files) {
    try {
      files.forEach(async file => {
        const ext = file.mimetype.split("/")[1];
        await fs.writeFile(
          `${imgsStorage}/thumbsImage-${uuidv4()}.${ext}`,
          file.buffer
        );
      });

      res.send({ success: true });
    } catch (error) {
      return res.send({ error });
    }
  } else {
    return res.send({ error: "No files uploaded...." });
  }
});

app.get("/images", async (req, res) => {
  try {
    const files = await fs.readdir(imgsStorage);
    res.send(files.map(file => `/${file}`));
  } catch (error) {
    return res.send({ error });
  }
});

app.delete("/images/all", async (req, res) => {
  try {
    const files = await fs.readdir(imgsStorage);
    files.forEach(async file => await fs.unlink(`${imgsStorage}/${file}`));
    res.send({ success: true });
  } catch (error) {
    return res.send({ error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
