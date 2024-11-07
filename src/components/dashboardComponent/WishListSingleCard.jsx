import useCartContext from "../../hooks/useCartContext";

const WishListSingleCard = ({ singleWishlistData }) => {
  const { handleAddToCart, wishList,setWishList } = useCartContext();
  const { name, image, price, description } = singleWishlistData;
  // console.log(singleWishlistData);

  const handleWishlistCart = (product) => {
    handleAddToCart(product);
    const remainingInWishList = wishList.filter(
      (singleData) => singleData.product_id !== product.product_id
    );
    setWishList(remainingInWishList);
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
        <div>
          <button
            className="px-4 py-2 bg-purple-700 text-white text-base font-semibold rounded-3xl"
            onClick={() => handleWishlistCart(singleWishlistData)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <button className="btn btn-sm btn-circle btn-outline absolute right-2 top-2 text-purple-700">
        ✕
      </button>
    </div>
  );
};

export default WishListSingleCard;
