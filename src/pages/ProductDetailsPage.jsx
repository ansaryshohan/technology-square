import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsBanner from "../components/productDetailsComponents/ProductDetailsBanner";
import { Helmet } from "react-helmet-async";

const ProductDetailsPage = () => {
  const products = useLoaderData();
  const { productId } = useParams();
  const productData = products.find(
    (product) => product.product_id === productId
  );

  return <div className="pb-20">
    <Helmet>
        <title>Product- Gadget World</title>
      </Helmet>
    <ProductDetailsBanner productData={productData}/>
  </div>;
};

export default ProductDetailsPage;
