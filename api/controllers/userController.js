const { PrismaClient } = require("@prisma/client");

const userRouter = new PrismaClient().user;

// get All Users

export const getAllUsers = async (req, res) => {
  const users = await userRouter.findMany();
  res.status(200).json(users);
};
