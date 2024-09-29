import React from "react";

import { Link } from "react-router-dom";
import "./CategoryCard.css";
function CategoryCard({ category }) {
  return (
    <Link
      to={`category/${category}`}
      className="text-decoration-none text-dark"
    >
      <div className="custom-card">
        <div>
          <div className="text-capitalize">{category}</div>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;