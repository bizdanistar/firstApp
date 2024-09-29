import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import ProductCard from "../../Coponents/Product/Card/ProductCard";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products List</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((p) => {
              return (
            
                <div className="flex" key={p.id}>
                  <ProductCard product={p} />
                </div>
              );
            })}
        </div>
      </div>
      </div>
      <div className="mb-5"></div>
      
    </Fragment>
  );
}

export default AllProducts;