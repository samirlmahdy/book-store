import express from "express";
import {
  createSerials,
  getAllSerials,
  updateSerial,
} from "../controllers/serialsController.js";

const serialRouter = express.Router();

serialRouter.get("/", getAllSerials);
serialRouter.post("/", createSerials);
serialRouter.patch("/", updateSerial);

export default serialRouter;
