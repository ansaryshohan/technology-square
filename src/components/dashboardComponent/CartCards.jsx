import { IoOptionsSharp } from "react-icons/io5";
import useCartContext from "../../hooks/useCartContext";
import CartSingleCard from "./CartSingleCard";
import ModalContent from "../modals/ModalContent";

const CartCards = () => {
  const { cartData, setCartData } = useCartContext();
  const totalPrice = cartData
    .map((cart) => cart.price)
    .reduce((totalValue, currentValue) => totalValue + currentValue, 0)
    .toFixed(2);

  const handlePriceSort = () => {
    const sortByPriceArray = [...cartData].sort((a, b) => b.price - a.price);
    setCartData(sortByPriceArray);
  };

  const handlePurchaseModal=()=>{
    document.getElementById("purchase-modal").showModal();
  }

  return (
    <div>
      
      <ModalContent totalPrice={totalPrice}/>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Cart</h3>
        <div className="flex items-center justify-center gap-3">
          <p className="text-lg font-semibold">Total Price : {totalPrice} $</p>
          <div className="flex items-center justify-center gap-2">
            <button
              className="flex items-center justify-center gap-1 text-base font-semibold px-4 py-2 rounded-3xl border border-purple-600 text-purple-600"
              onClick={handlePriceSort}
            >
              Sort by price{" "}
              <span>
                <IoOptionsSharp className="rotate-90" />
              </span>
            </button>
            <button
              className="px-4 py-2 bg-purple-700 text-white text-base font-semibold rounded-3xl"
              onClick={handlePurchaseModal}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      {cartData.length > 0 ? (
        <div className="mt-6 my-10 flex flex-col gap-4">
          {cartData.map((cart) => (
            <CartSingleCard key={cart.product_id} singleCartData={cart} />
          ))}
        </div>
      ) : (
        <p>No Product Added On Cart</p>
      )}
    </div>
  );
};

export default CartCards;
