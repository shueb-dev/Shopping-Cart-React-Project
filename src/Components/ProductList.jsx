import { useEffect, useState } from "react";
// import productsData from "../assets/productData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import Productskeleton from "./Productskeleton";
// import { data } from "react-router-dom";
export const ProductList = () => {
  //   console.log(productsData);

  const [products, setProducts] = useState([]);
  const [Loading, SetLoading] = useState(false);

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
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  if (Loading) return <Productskeleton />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};
