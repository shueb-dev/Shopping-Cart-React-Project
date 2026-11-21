import { useEffect, useRef, useState } from "react";
// import productsData from "../assets/productData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import Productskeleton from "./Productskeleton";
export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        SetLoading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100",
        );

        setProducts(data.products);
        SetLoading(false);
      } catch (e) {
        SetLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (Loading) return <Productskeleton />;
  return (
    <>
      <div className="relative">
        <input
          ref={searchRef}
          type="text"
          placeholder="search your products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-10 rounded border shadow w-full focus:outline-none focus:border-pink-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
