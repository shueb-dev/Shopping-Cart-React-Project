import { IoReturnUpBack } from "react-icons/io5";

export const initialState = {
  products: [],
  Total,
};

const ShopReducer = (state, action) => {
  const { type, payload } = products;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRODUCT_QUANTITY":
      return {
        ...state,
        products: payload.products,
      };
    case "CALCULATE_TOTAL_PRICE":
      return {
        ...state,
        products: payload.Total,
      };
    case "CLEAR_CART":
      return initialState;

    default:
      throw new Error("unknown reducer action");
  }
};

export default ShopReducer;
