import { useState, useEffect } from "react";
import BOOK_DATA from "../../data/book";
import Categories from "../Category";
import Book from "./Book";

const Booklist = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    setbooks(BOOK_DATA);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">All books</h1>
      <div className="row">
        {books.map((book, index) => (
          <Book data={book} keys={index} />
        ))}
      </div>
    </div>
  );
};
export default Booklist;
