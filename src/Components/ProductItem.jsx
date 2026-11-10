import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="border border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out"
    >
      <img
        className="w-full h-48 object-left"
        src={product.thumbnail}
        alt="product-image"
      />
      <div className="p-4">
        <h2 className="text-xl mb-2 font-semibold ">{product.title}</h2>
        <p className="text-gray-500 truncate mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 ">${product.price.toFixed()}</span>
          <div className="text-gray-500 text-sm">
            {product.stock > 0 ? `${product.stock} in stock` : "out stock"}
          </div>
        </div>
        <div className="mt-4">
          <span className="text-yellow-500">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-300">
            {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
