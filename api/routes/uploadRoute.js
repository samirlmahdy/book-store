const express = require("express");
const uploadFiles = require("../controllers/uploadController");

const uploadRouter = express.Router();

uploadRouter.post("/", uploadFiles);

module.exports = uploadRouter;
