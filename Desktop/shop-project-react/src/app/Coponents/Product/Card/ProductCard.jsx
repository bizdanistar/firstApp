import React from "react";

import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard({ product }) {
  return (
   
<div>  
            <Link
        to={`/product/${product.id}`}
        className="group relative">
     
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt='image'
                  src={product.image}
                  className="object-scale-down h-48 w-96 object-center lg:h-full lg:w-full rounded"
                />
              </div>
             
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href='#'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
          
            </Link>
            </div>
  )
}

export default ProductCard;
