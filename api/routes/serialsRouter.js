const express = require("express");
const {
  createSerials,
  getAllSerials,
  useSerial,
  deleteSerial,
} = require("../controllers/serialsController.js");

const serialRouter = express.Router();

serialRouter.get("/", getAllSerials);
serialRouter.post("/", createSerials);
serialRouter.patch("/", useSerial);
serialRouter.delete("/:id", deleteSerial);

module.exports = serialRouter;
