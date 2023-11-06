import React, { useEffect } from "react";
import {
  decreaseQuantity,
  getCartTotal,
  increaseQuantity,
  removeItem,
} from "../../reducers/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartDetails = () => {
  const { cart, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  return (
    <div className="container mx-auto mt-8 p-[4vw]">
      <h1 className="text-3xl  mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white shadow-lg p-4">
            <img
              src={item.images}
              alt={item.name}
              className="w-full h-auto "
            />
            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1">Price: ${item.price}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-red-500 text-white rounded-full py-1 px-3"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>

              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-gray-700 rounded-full p-2"
                  onClick={() =>
                    dispatch(decreaseQuantity({ itemId: item.id }))
                  }
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 text-gray-700 rounded-full p-2"
                  onClick={() =>
                    dispatch(increaseQuantity({ itemId: item.id }))
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">Total: ${totalPrice}</p>
        <p className="text-xl font-semibold">Total Quantity: {cart.length}</p>
       
      </div>
    </div>
  );
};

export default CartDetails;
