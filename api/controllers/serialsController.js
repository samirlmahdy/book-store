import { nanoid } from "nanoid";

export const getSerials = (req, res) => {
  try {
    const serial = nanoid();
    res.status(200).json(serial);
  } catch (error) {
    console.log(error);
  }
};
