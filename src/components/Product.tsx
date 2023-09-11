import ProductGallery from "./ProductGallery.tsx";
import ProductText from "./ProductText.tsx";

interface ProductProps {
  onAddToCartClick: (amount: number) => void;
}

const Product: React.FC<ProductProps> = ({ onAddToCartClick }) => {
  return (
    <main className="product-grid-container">
      <ProductGallery />
      <ProductText onAddToCartClick={onAddToCartClick} />
    </main>
  );
};

export default Product;
