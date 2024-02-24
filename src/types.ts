export type Book = {
  id: number;
  book_name: string;
  serial: Serial[];
  bookURL: string;
};

export type Serial = {
  id: number;
  book_serial: string;
  isUsed: boolean;
};

export type User = {
  id: number;
  username: string;
  role: string;
};
