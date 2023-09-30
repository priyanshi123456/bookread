import React from "react";
import { Link } from "react-router-dom";

function Rating(props) {
  const {id} = props.data
  return (
    <div>
      <div
        className="container"
        style={{ backgroundColor: "wheat", padding: "20px" }}
      >
        <h2>Rating and Review</h2>
        <Link
          className="btn btn-dark btn-block"
          to={"/review/"+id}
        >
          Write a review
        </Link>
      </div>
    </div>
  );
}

export default Rating;
