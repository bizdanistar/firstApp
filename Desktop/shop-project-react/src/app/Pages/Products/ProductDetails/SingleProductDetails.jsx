import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../Coponents/Header/TopNavbar";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts } from "../../../Features/Cart/CartSlice";

import ReactStars from "react-rating-stars-component"


function SingleProductDetails() {
  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  //increase item quantity
  const increaseQunaity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  //decrease item quantity
  const decreaseQunaity = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

  //add the item to the cart
  const addToCart = (e) => {
    e.preventDefault();
    let item = {
      id: parseInt(productId),
      quantity: quantity,
      price: product.price,
    };
    dispatch(addToCarts(item));
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  //use effect function to find the product from all products
  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return (
    <div className="flex flex-col align-center bg-gray-100 h-screen">
      <TopNavbar />
     

<div  className="w-5/6 self-center bg-white rounded-2xl">

       {product && (

    <div className="grid w-full grid-cols-1 items-start gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-white sm:col-span-4 lg:col-span-5">
                  <img alt='image' src={product.image} className="object-scale-down h-150 w-96 object-center p-12" />
                </div>
                <div className="sm:col-span-8 lg:col-span-7 m-4">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12"> {product.title}</h2>
    <section aria-labelledby="information-heading" className="mt-2 ">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>
                    <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link
                    to={`/category/${product.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {product.category}
                  </Link> </h4>
                    <p className="text-2xl text-gray-900">Price ${product.price}</p>
                    <p>{product.description}</p>

                    <div className="flex flex-row w-full">
                  <button
                  className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  onClick={decreaseQunaity}
                  >
                    -
                  </button>
                 <h5 className="mx-8">
                    
                  {quantity}
                  </h5>
                  <button
                  className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    onClick={increaseQunaity}
                  >
                   +
                  </button>
                </div>
              
                <div>
              <ReactStars
                count={5}
                value={product.rating.rate}
                isHalf={true}
                emptyIcon={<i className="far fa-start"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              ></ReactStars>
              {`(${product.rating.count})`}
            </div>


                 
                    <div>
                 
                 <button
             className="mt-6 flex w-450 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                   onClick={addToCart}
                 >
                   Add To Cart
                 </button>
               </div>
                  </section>
                  </div>
                    </div>
       )}
       </div>
   
                 </div>
  );
}

export default SingleProductDetails;




