import { google } from "googleapis";
import * as fs from "fs";
import path from "path";
import "dotenv/config";

const CLIENT_ID =
  "1098886809123-k3s2qd32ru4lbpqqng81c0i1rlsufavh.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const REFRESH_TOKEN =
  "1//04OAucmBUNxJrCgYIARAAGAQSNwF-L9Ir5wuuGqzn1sr5iPKLGH7Vc7bnHF_I4elhIlTavUHgGRcuCu2V5MDTBx-sjr6A4dORNwA";

function getRefreshToken() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );
  console.log(oauth2Client);
  return oauth2Client;
}
getRefreshToken();

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const filePath = path.join(__dirname, "background.png");

async function uploadFile(path) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "cards.png",
        mimeType: "image/png",
      },
      media: {
        mimeType: "image/png",
        body: fs.createReadStream(path),
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

uploadFile(filePath);

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: "1YObbrICUfvoCCoYHWU5MlTJxHrXESO1e",
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = "YOUR FILE ID";
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    /*
    webViewLink: View the file in browser
    webContentLink: Direct download link
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}
