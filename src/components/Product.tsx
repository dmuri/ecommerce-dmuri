import ProductGallery from "./ProductGallery.tsx";
import ProductText from "./ProductText.tsx";

const Product = () => {
  return (
    <main className="product-grid-container">
      <ProductGallery />
      <ProductText />
    </main>
  );
};

export default Product;
