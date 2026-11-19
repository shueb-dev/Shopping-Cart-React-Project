import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState } from "./ShopReducer";
import ShopReducer from "./ShopReducer";

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, initialState);

  useEffect(() => {
    (localStorage.setItem("cart_item"),
      JSON.stringify({ Total: state.Total, products: state.products }));
  }, [state]);

  const calculateTotalPrice = (products) => {
    let Total = 0;
    products.forEach((product) => {
      Total += product.price * product.quantity;
    });

    dispatch({
      type: "CALCULATE_TOTAL_PRICE",
      payload: {
        Total,
      },
    });
  };

  const addToCart = (product) => {
    const productIndex = state.products.findIndex((p) => p.id === product.id);

    let updatedProduct = [...state.products];

    //if the product does not exists
    if (productIndex === -1) {
      updatedProduct = [
        ...updatedProduct,
        {
          ...product,
          quantity: 1,
        },
      ];
      //if product exists previous update and add
    } else {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: updatedProduct[productIndex].quantity + 1,
      };
    }

    //To do calculate total price
    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  //updateProductQuantity

  const updateProductQuantity = (product, newQuantity) => {
    const productIndex = state.products.findIndex((p) => p.id === product.id);
    let updatedProduct = [...state.products];

    if (productIndex <= 0) {
      updatedProduct = updatedProduct.filter((pro) => pro.id !== product.id);
    } else {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: newQuantity,
      };
    }
    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY",
      payload: {
        products: updatedProduct,
      },
    });
  };

  //remove from cart

  const removeFromCart = (product) => {
    const updatedProduct = state.products.filter(
      (pro) => pro.id !== product.id,
    );

    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  //clear cart

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: {},
    });
  };

  const value = {
    products: state.products,
    Total: state.Total,
    addToCart,
    updateProductQuantity,
    removeFromCart,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("context must be inside the shopContext");
  }
  return context;
};

export default useShop;
