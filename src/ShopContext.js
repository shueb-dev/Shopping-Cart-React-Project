import { Children, createContext, useReducer } from "react";
import reducer, { initialState } from "./ShopReducer";

export const shopContext = createContext(initialState);

export const shopProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const productIndex = state.products.findIndex((product) => p.id === p.id);
    let updatedProduct = [...state.products];

    if (productIndex !== -1) {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: updatedProduct[productIndex].quantity + 1,
      };
    } else {
      updatedProduct = [
        ...updatedProduct,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const calculateTotalPrice = (products) => {
    let Total = 0;
    products.forEach((product) => {
      Total += product.price * product.quantity;
    });
  };

  dispatch({
    type: "CALCULATE_TOTAL_PRICE",
    payload: {
      Total,
    },
  });
};
