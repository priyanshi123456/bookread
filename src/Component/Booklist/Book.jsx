import { Link } from "react-router-dom";
const Book = (props) => {
  const { id, image, description, author } = props.data;
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} className="card-image-top" />
        <div className="card-body text-center">
          <h2>{author}</h2>
          <Link className="btn btn-dark btn-block" to={"/books/detail/" + id}>
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Book;
