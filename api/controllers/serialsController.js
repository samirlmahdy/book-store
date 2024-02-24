const nanoid = require("nanoid");
const { PrismaClient } = require("@prisma/client");

const serialClient = new PrismaClient().serial;

// get all serials

const getAllSerials = async (req, res) => {
  try {
    const serials = await serialClient.findMany({ include: { Book: true } });
    res.status(200).json(serials);
  } catch (error) {
    console.log(error);
  }
};

// create serials related to book

const createSerials = async (req, res) => {
  const { serialsCount } = req.body;
  const { book_id } = req.body;

  try {
    const serials = [];
    for (let i = 0; i <= serialsCount; i++) {
      const serialBook = {
        bookId: book_id,
        book_serial: nanoid(),
      };
      serials.push(serialBook);
      await serialClient.create({ data: serialBook });
    }

    res.status(200).json(serials);
  } catch (error) {
    console.log(error);
  }
};

// use Serial Number

const useSerial = async (req, res) => {
  const { serial } = req.body;
  // const { book_id } = req.body;

  try {
    const book_Serial = await serialClient.findFirst({
      where: { book_serial: serial },
    });
    const serialId = book_Serial.id;
    if (!book_Serial || book_Serial.isUsed) {
      res
        .status(400)
        .json({ message: "This serial number is invalid or used already." });
    }
    const usedSerial = { ...book_Serial, isUsed: true };
    await serialClient.update({
      where: { id: serialId },
      data: usedSerial,
    });
    res.status(200).json(usedSerial);
  } catch (error) {
    console.log(error);
  }
};

// delete Serial Number

const deleteSerial = async (req, res) => {
  const serial_id = req.params.id;
  try {
    const serial = await serialClient.delete({
      where: {
        id: serial_id,
      },
    });
    res.status(200).json({ message: "Serial number has been deleted", serial });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createSerials, getAllSerials, useSerial, deleteSerial };
