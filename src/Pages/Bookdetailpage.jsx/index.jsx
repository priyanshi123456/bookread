import React, { useState, useEffect } from "react";
import BOOK_DATA from "../../data/book";
import Navbar from "../../Component/Navbar";
import Bookdetail from "../../Component/Bookdetail";
import { useParams } from "react-router-dom";
import Reviewdata from "../../Component/Reviewdata/Reviewdata";


const Bookdetailpage = () => {
  const { id } = useParams();
  const [books, setbooks] = useState({});

  useEffect(() => {
    setbooks(BOOK_DATA[id]);
  },[]);

  return (
    <>
      <Navbar />
      <Bookdetail data={books} />
    </>
  );
};
export default Bookdetailpage;
