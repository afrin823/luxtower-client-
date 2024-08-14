import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ title, content, to }) {
  return (
    <div className="card bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title || ""}</h2>
        <p>{content || ""}</p>
        <div className="card-actions justify-end">
          <Link to={to} className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
