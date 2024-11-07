import { useNavigate } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { product_id, name, image, price } = product;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-48 object-cover pt-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>price : {price} $</p>
        <div className="card-actions justify-center mt-1">
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/product/${product_id}`)}
          >
            See details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
