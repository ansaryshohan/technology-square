import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsBanner from "../components/productDetailsComponents/ProductDetailsBanner";

const ProductDetailsPage = () => {
  const products = useLoaderData();
  const { productId } = useParams();
  const productData = products.find(
    (product) => product.product_id === productId
  );

  return <div className="pb-20">
    <ProductDetailsBanner productData={productData}/>
  </div>;
};

export default ProductDetailsPage;
