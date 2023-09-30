import React, { useState, useEffect } from "react";
import BOOK_DATA from "../../data/book";
import Navbar from "../../Component/Navbar";
import { useParams } from "react-router-dom";
import Reviewdata from "../../Component/Reviewdata/Reviewdata";

const Reviewdetail = () => {
  const { id } = useParams();
  const [books, setbooks] = useState({});

  useEffect(() => {
    setbooks(BOOK_DATA[id]);
  }, []);

  console.log(books)

  return (
    <>
      <Navbar />
      <Reviewdata data={books} />
    </>
  );
};
export default Reviewdetail;
