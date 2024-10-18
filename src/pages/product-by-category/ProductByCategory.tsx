import ProductSlider from "../../components/product-slider/ProductSlider";
import { useParams } from "react-router-dom";
import { useLang } from "../../lib/hooks/useLang";

const ProductByCategory = () => {
  const { categoryId } = useParams();
  const { isEn } = useLang();

  return (
    <div className={`${isEn ? "ml-6 lg:ml-28" : "mr-6 lg:mr-28"}`}>
      <ProductSlider
        click=""
        setClick={()=>{}}
        url={`https://fakestoreapi.com/products/category/${categoryId}`}
      />
    </div>
  );
};

export default ProductByCategory;
