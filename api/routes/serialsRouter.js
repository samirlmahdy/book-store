import express from "express";
import {
  createSerials,
  getAllSerials,
  useSerial,
  deleteSerial,
} from "../controllers/serialsController.js";

const serialRouter = express.Router();

serialRouter.get("/", getAllSerials);
serialRouter.post("/", createSerials);
serialRouter.patch("/", useSerial);
serialRouter.delete("/:id", deleteSerial);

export default serialRouter;
