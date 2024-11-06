import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategorySection from "./CategorySection";
import ProductCards from "./ProductCards";

const ProductSection = () => {
  const productsData = useLoaderData();
  const [products, setProducts] = useState(productsData.slice(0, 9));

  const handleProducts = (categoryName) => {
    const categoryProducts = productsData.filter(
      (product) => product.category === categoryName
    );
    setProducts(categoryProducts);
  };
  return (
    <div className="pb-20 md:w-10/12 md:mx-auto">
      <h3 className="text-3xl font-bold text-purple-500 pt-10 pb-20 text-center">Explore cutting-edge gadgets </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <div className="col-span-1">
          <CategorySection handleProducts={handleProducts} />
        </div>
        <div className="col-span-3">
          <ProductCards products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
