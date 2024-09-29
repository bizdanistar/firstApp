import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../Coponents/Cart/CartItemCard";

import TopNavbar from "../Coponents/Header/TopNavbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  return (
    <Fragment>
      <TopNavbar />
      <div>
        <div>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products">
                  {" "}
                  Go for shoping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
                carts.map((product) => {
                  return (
                  <div key={product.id} className="flex py-6">
   <CartItemCard item={product} />
      </div>
                )}
            )}
        </div>

        {carts.length > 0 && (
       <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
       <div className="flex justify-between text-base font-medium text-gray-900">
                    <h5 className="align-middle d-inline">
                      Subtotal: ${subTotal}
                    </h5>
                    
                  </div>
                 <div>
                  <h5 className="align-middle d-inline">Tax(10%): ${tax}</h5>
                 </div>
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Total Price: ${totalAmmount.toFixed(2)}
                    </h5>
                  </div>
                  <div className="w-100 text-center">
                    <button variant="dark" className="align-middle d-inline">
                      Checkout
                    </button>
                  </div>
                </div>

        )}
        </div>
    
      
      
    </Fragment>
  );
}

export default Cart;
