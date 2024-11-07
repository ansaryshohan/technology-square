import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
