import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetailsBanner = ({productData}) => {
  return (
    <>
    <div className="pb-14  bg-purple-600 text-white">
      <div className="pt-14 pb-32 rounded-b-lg md:w-10/12 md:mx-auto">
      <h1 className="text-5xl font-bold text-center">Product Details</h1>
      <p className="text-center text-base font-normal w-7/12 mx-auto pt-5 pb-12">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
    </div>
    <div className="md:w-10/12 mx-auto p-4 rounded-lg bg-white/50 backdrop-blur-md -mt-40">
      <ProductDetailsCard productData={productData}/>
    </div>
    </>
  )
}

export default ProductDetailsBanner