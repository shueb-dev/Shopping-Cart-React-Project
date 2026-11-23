import { useEffect, useRef, useState } from "react";
// import productsData from "../assets/productData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import Productskeleton from "./Productskeleton";
import { AiOutlineSearch } from "react-icons/ai";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]);

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        SetLoading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100",
        );

        setProducts(data.products);
        setOriginalProducts(data.products);
        SetLoading(false);
      } catch (e) {
        SetLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchProducts = async () => {
        try {
          SetLoading(true);
          const { data } = await axios.get(
            `https://dummyjson.com/products/search?q=${searchTerm}`,
          );

          setProducts(data.products);
          SetLoading(false);
        } catch (e) {
          SetLoading(false);
        }
      };
      fetchProducts();
    } else {
      setProducts(originalProducts);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [products]);

  if (Loading) return <Productskeleton />;
  return (
    <>
      <div className="relative">
        <input
          ref={searchRef}
          type="text"
          placeholder="search your products.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-10 rounded border shadow w-full focus:outline-none focus:border-pink-300"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 mt-6">
          <AiOutlineSearch className="w-6 h-6 text-pink-600" />
        </span>
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
