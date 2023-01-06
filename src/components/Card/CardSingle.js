import React from "react";
import { Link } from "react-router-dom";

const CardSingle = ({ category }) => {
  return (
    <Link to={`categories/${category.name}`}>
      <div className="card w-96 border hover:border-yellow-500  shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{category.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CardSingle;
