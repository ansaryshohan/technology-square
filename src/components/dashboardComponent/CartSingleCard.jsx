import { toast } from "react-toastify";
import useCartContext from "../../hooks/useCartContext";

const CartSingleCard = ({ singleCartData }) => {
  const { cartData, setCartData } = useCartContext();
  const { name, image, price, description } = singleCartData;

  const handleCartDelete = (product) => {
    const remaining = cartData.filter(
      (singleData) => singleData.product_id !== product.product_id
    );
    setCartData(remaining);
    toast.error(`${product.name} is deleted from cart`)
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl relative">
      <figure className="p-2">
        <img src={image} alt={name} className="w-40 h-40 rounded-lg" />
      </figure>
      <div className="card-body ps-8">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-lg font-medium">Price : {price} $</p>
      </div>
      <button
        className="btn btn-sm btn-circle btn-outline absolute right-2 top-2 text-purple-700"
        onClick={() => handleCartDelete(singleCartData)}
      >
        ✕
      </button>
    </div>
  );
};

export default CartSingleCard;
