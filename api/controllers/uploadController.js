const { google } = require("googleapis");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const bookClient = new PrismaClient().book;

async function uploadFiles(req, res) {
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
      console.log(file);
      // Await the book creation and store the result
      const dbResponse = await bookClient.create({
        data: { book_name: file.originalname },
      });
      if (!dbResponse) {
        throw new Error("Failed to add file to the database");
      }
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
    // Send the uploadedFiles array as response
    res.status(200).json({ files: uploadedFiles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred during file upload" });
  }
}

module.exports = uploadFiles;
