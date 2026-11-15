import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import useShop, { ShopContext } from "../ShopContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { addToCart } = useShop();
  const context = useContext(ShopContext);

  //   console.log(id);

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );

        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <ProductDetailsSkeleton />;
  return (
    product && (
      <div className="p-4 md:8">
        <button
          onClick={() => navigate(-1)}
          className="bg-pink-600 text-white text-xl px-2 font-semibold py-2 mb-4 rounded-lg hover:bg-pink-800 transition-colors duration-200"
        >
          ← Go Back
        </button>

        <h1 className="text-black text-2xl font-bold mb-6">{product.title}</h1>
        <div className="md:flex">
          <div className="md:w-1/2 pr-4 mb-6 md:mb-0 ">
            <img
              className="w-full h-96 bg-white shadow-lg"
              src={mainImage}
              alt={product.title}
            />

            {/* {image gallery} */}
            <div className="flex mt-4 space-x-4 overflow-auto">
              {product.images.map((Image, idx) => (
                <img
                  onClick={() => setMainImage(Image)}
                  className="w-24 h-24 bg-white shadow-md cursor-pointer"
                  key={idx}
                  src={Image}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 ml-4">
            <p className="text-gray-500 text-lx">{product.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-pink-600 text-2xl font-bold">
                ${product.price.toFixed()}
              </span>
              <span className="text-gray-400">
                {product.stock > 0
                  ? `${product.stock} in stock `
                  : "out of stock"}
              </span>
            </div>

            <div className="mt-4">
              <span className="text-yellow-300 ">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-400">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
            <button
              onClick={() => context.addToCart(product)}
              className="bg-pink-600 mt-4 px-4 py-2 text-xl font-semibold rounded-lg shadow-md hover:bg-pink-800 transition-colors duration-200"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
