import React from "react";
import { GoTrash } from "react-icons/go";
import Payment from "./Payment";
import useShop from "../ShopContext";

function CartItem() {
  const { products, updateProductQuantity, removeFromCart } = useShop();

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 space-x-6">
      {/* {card items section} */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">
          {products.length > 0
            ? "Your Cart Items"
            : "Your cart is empty now please go and buy some items"}
        </h2>
        {products.map((product) => (
          <div className="flex items-start space-x-4 mb-6">
            <img
              className="w-24 h-24 object-cover"
              src={product.thumbnail}
              alt={product.title}
            />

            {/* {product info } */}
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="text-gray-500">{product.description}</div>
              {/* {price & quantity } */}
              <div className="flex items-center justify-between mt-2">
                {/* {price & quantity } */}
                <div className="flex items-center space-x-2">
                  <span className="text-pink-600 font-semibold">
                    ${product.price.toFixed()}
                  </span>
                  {/* {quantity } */}
                  <div className="">
                    <label htmlFor="" className="text-sm font-semibold">
                      quantity
                    </label>
                    <input
                      onChange={(event) =>
                        updateProductQuantity(product, event.target.value)
                      }
                      defaultValue={product.quantity}
                      type="number"
                      min={1}
                      className="w-16 border border-gray-300 font-semibold rounded-md p-2 "
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product)}
                  className="text-red-600  hover:text-red-800 transition-colors duration-200 cursor-pointer"
                >
                  <GoTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Payment />
    </div>
  );
}

export default CartItem;
