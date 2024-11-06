import SingleProductCard from "./SingleProductCard";

const ProductCards = ({products}) => {

  return (
    <div className="grid grid-cols-3 gap-5 ms-5">
      {
        products?.map(product=><SingleProductCard key={product.product_id} product={product}/>)
      }
    </div>
  )
}

export default ProductCards