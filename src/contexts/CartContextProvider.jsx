import { useState } from "react";
import { CartContext } from "./cartContext";
import { toast } from "react-toastify";

const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddToCart = (product) => {
    const existInWishList = cartData.find((cart) => cart.product_id === product.product_id);
    if (!existInWishList) {
      setCartData([...cartData, product]);
      toast.success(`${product.name} added to cart`);
    }else{
      toast.warning(`${product.name} already in cart`);
    }
  };

  const objData = { cartData, setCartData, wishList, setWishList,handleAddToCart };

  return (
    <CartContext.Provider value={objData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
