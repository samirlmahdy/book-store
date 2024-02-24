const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const multer = require("multer");
const fs = require("fs");

// Create an Express application
const app = express();
const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, callback) {
    const extension = file.originalname.split(".").pop();
    callback(null, `${file.fieldname}-${Date.now()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

// Define a port number
const PORT = process.env.PORT || 3030;

app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/books", require("./routes/booksRoutes"));
app.use("/serials", require("./routes/serialsRouter"));

app.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({
      version: "v3",
      auth,
    });

    const uploadedFiles = [];

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];

      const response = await drive.files.create({
        requestBody: {
          name: file.originalname,
          mimeType: file.mimetype,
          parents: ["1Q1NxXfDuBOWXtOE9WSq0F2zYAc-mSLNk"],
        },
        media: {
          body: fs.createReadStream(file.path),
        },
      });
      uploadedFiles.push(response.data);
    }
    res.status(200).json({ files: uploadedFiles });
    // console.log(file.path);
    // console.log(auth);
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
