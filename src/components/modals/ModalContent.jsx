import { useNavigate } from "react-router-dom";
import successImg from "../../assets/Group.png";
import useCartContext from "../../hooks/useCartContext";

const ModalContent = ({ totalPrice }) => {
  const { setCartData } = useCartContext();
  const navigate = useNavigate();

  const handleCart = (e) => {
    e.preventDefault();
    setCartData([]);
    document.getElementById("purchase-modal").close();
    navigate("/");
  };

  return (
    <dialog id="purchase-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleCart}
            type="submit"
          >
            ✕
          </button>
        </form>
        <img src={successImg} alt="" className="mx-auto py-6" />
        <h3 className="font-bold text-lg text-center">Payment Successful</h3>
        <p className="font-medium text-base text-center my-4">
          Thanks for purchasing
        </p>
        <p className="py-4 text-center font-bold text-lg">
          totalPrice: {totalPrice}
        </p>

        <form method="dialog " className="text-center mt-4">
          <button
            className="btn btn-outline"
            type="submit"
            onClick={handleCart}
          >
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ModalContent;
