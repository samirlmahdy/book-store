import express from "express";
import { getSerials } from "../controllers/serialsController";

const serialRouter = express.Router();

serialRouter.get("/", getSerials);

export default serialRouter;
