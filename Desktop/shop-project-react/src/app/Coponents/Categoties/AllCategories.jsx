import React from "react";

import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

function AllCategories() {
  const { categories } = useSelector((state) => state.categories);
  return (
    <div>
     
    </div>
  );
}

export default AllCategories;