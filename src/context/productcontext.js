import axios from "axios";
import { createContext, React, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
export const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let getProducts = async () => {
    dispatch({ type: "API_LOADING" });
    try {
      const res = await axios.get("https://api.pujakaitem.com/api/products");
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
export const useProductContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
