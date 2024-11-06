import { useState } from "react";
import { IoCartOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";

const ProductDetailsCard = ({ productData }) => {
  const [wishList, setWishList] = useState([]);
  const [isWishListed, setIsWishListed] = useState(false);
  const {
    product_id,
    name,
    image,
    price,
    description,
    specification,
    availability,
    rating,
  } = productData;

  const handleWishlist = (productId) => {
    const existInWishList = wishList.find((product) => product === productId);
    // console.log(existInWishList);
    if (!existInWishList) { 
      setWishList([...wishList, productId]);
      setIsWishListed(true)
      toast.success("Product added is wishlist")
    } 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {/* card image div */}
      <div className="md:col-span-1 px-3">
        <div className="bg-white h-full place-content-center rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
      {/* card text div */}
      <div className="md:col-span-2 bg-gray-100 rounded-lg p-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price:{price} $</p>
            <div className="badge badge-success badge-outline p-3">
              {availability}{" "}
            </div>
            <p>{description}</p>
            {/* specification div */}
            <div>
              <p className="text-base font-semibold">Specifications:</p>
              <ul className="ps-2 pt-1">
                {specification.map((listItem, idx) => (
                  <li key={idx}>
                    {idx + 1}. {listItem}
                  </li>
                ))}
              </ul>
            </div>
            {/* rating div */}
            <div>
              <p className="text-base font-semibold">Ratings:</p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  // color={"gray"}
                  activeColor="#ffd700"
                  isHalf={true}
                  edit={false}
                />
                <span>({rating})</span>
              </div>
            </div>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-lg rounded-3xl">
                Add to cart <IoCartOutline />
              </button>
              {isWishListed ? (
                <button
                  className="btn text-2xl px-2 py-1"
                  onClick={() => handleWishlist(product_id)}
                  disabled={isWishListed}
                >
                  <IoHeartSharp color="red" />
                </button>
              ) : (
                <button
                  className="btn text-2xl border-2 border-red-500"
                  onClick={() => handleWishlist(product_id)}
                >
                  <IoHeartOutline />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
