import axios from "axios";
import React, { useEffect, useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFormCart,
} from "../../Features/Cart/CartSlice";

function CartItemCard({ item }) {
  //set the product info to state
  const [product, setProduct] = useState({});

  //import redux dispatch
  const dispatch = useDispatch();

  //increase quantity
  const increaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity(item));
  };
  //decrease the item quantity
  const decreaseItemQunaity = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(item));
  };
  //remove item form cart
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFormCart(item));
  };
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
      setProduct({ ...res.data, quantity: item.quantity });
    });
  }, [item]);
  let content = "";
  if (product) {
    return (content = (
      <div className="w-screen">
      <div className="h-4/6 w-4/6 -my-6 divide-y divide-gray-200">
        <ul role="list" className="-my-6 divide-y divide-gray-200 flex">
              <div>
              <img alt='image' src={product.image} 
              className="object-scale-down w-56 object-center p-12" />
              </div>

              <div className="flex w-4/6 justify-center  flex-col">
              <Link
                to={`/product/${product.id}`}
                className="flex justify-between text-base font-medium text-gray-900"
              >
                {product?.title}
              </Link>
              <button
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-11"
                onClick={decreaseItemQunaity}
              >
                <FaMinus />
              </button>
              <span className="fs-4">{product.quantity}</span>
              <button
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-11"
                onClick={increaseItemQuantity}
              >
                <FaPlus />
              </button>
           
           
              <span className="fs-5">
                $
                {product.price
                  ? (product.price * product.quantity).toFixed(2)
                  : ""}
              </span>
            
           
              <button variant="danger" 
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-1/5"
              onClick={removeItem}>
                Remove
              </button>
             </div>
              </ul>
            
            </div>

            </div>
       
        
    ));
  }
  return { content };
}

export default CartItemCard;

