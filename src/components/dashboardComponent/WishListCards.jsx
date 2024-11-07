import useCartContext from "../../hooks/useCartContext";
import WishListSingleCard from "./WishListSingleCard";

const WishListCards = () => {
  const { wishList } = useCartContext();
  // console.log(wishList)

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">WishList</h3>
      </div>
      {wishList.length > 0 ? (
        <div className="mt-6 my-10 flex flex-col gap-4">
          {
            wishList.map((wishListData) => (
              <WishListSingleCard key={wishListData.product_id} singleWishlistData={wishListData} />
            ))
          }
        </div>
      ) : (
        <p>No Product Added On Cart</p>
      )}
    </div>
  );
}

export default WishListCards