import express from "express";

const userRouter = express.Router();

userRouter.get("/", getUsers);
