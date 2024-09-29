import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TopNavbar from "../../Coponents/Header/TopNavbar";
import ProductCard from "../../Coponents/Product/Card/ProductCard";


function CategoryProducts() {
  let { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    let data = products.filter((p) => p.category === categoryName);
    setCategoryProducts(data);
  }, [categoryName, products]);
  return (
    <div>
   
       <TopNavbar />
      <div>
        <div>
          <h4 class="text-2xl font-bold text-gray-900 capitalize">
            Produdcts from -{" "}
            <span class="text-2xl font-bold text-gray-900 capitalize">{categoryName}</span>
          </h4>
          <div >
            {categoryProducts &&
              categoryProducts.map((product) => {
                return (
                  <div
                    className="flex"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default CategoryProducts;