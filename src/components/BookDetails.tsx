import React, { useState } from "react";
import { Book, Serial } from "../types";
import { useParams } from "react-router-dom";

const BookDetails = ({ book }: { book: Book }) => {
  const [serialsCount, setSerialsCount] = useState("");
  const { id } = useParams();
  console.log(id);

  const handleSerialCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerialsCount(e.target.value);
  };

  const handleCreateSerils = async () => {
    try {
      const response = await fetch(`${process.env.API_ENDPOINT}/serials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          book_id: book.id,
          serialsCount: serialsCount,
        }),
      });
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="serials">
        {book.serial.map((s: Serial) => {
          return (
            <div
              className="serialsdiv"
              key={s.id}
            >
              <p className="serial">{s.book_serial}</p>
              <p className="serial">{s.isUsed}</p>
            </div>
          );
        })}
        <label htmlFor="serial-numbers">Create Serials</label>
        <input
          type="text"
          name="serial-numbers"
          onChange={handleSerialCountChange}
          value={serialsCount}
        />
        <button onClick={handleCreateSerils}>Create Serials</button>
      </div>
    </div>
  );
};

export default BookDetails;
