import React from "react";
import Categories from "../Category";

function Categorylist() {
  const items = [
    {
      catId: 1,
      catName: "Fiction",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: 2,
      catName: "History",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: 3,
      catName: "science",
      catImage: "https://placehold.it/400/888888",
    },
    {
      catId: 1,
      catName: "external affairs",
      catImage: "https://placehold.it/400/888888",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-center">All categories</h1>
        <div className="row">
          {items.map((product, index) => (
            <Categories keys={index} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorylist;
