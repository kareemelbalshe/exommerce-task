import React from "react";
import ProductSlider from "../../components/product-slider/ProductSlider";
import { useParams } from "react-router-dom";

const ProductByCategory = () => {
  const { categoryId } = useParams();

  return (
    <div className="ml-6 lg:ml-28">
      <ProductSlider
        url={`https://fakestoreapi.com/products/category/${categoryId}`}
      />
    </div>
  );
};

export default ProductByCategory;
