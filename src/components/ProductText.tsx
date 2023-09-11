import { useState } from "react";

interface ProductTextProps {
  onAddToCartClick: (amount: number) => void;
}

const ProductText: React.FC<ProductTextProps> = ({ onAddToCartClick }) => {
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    setAmount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    if (amount === 0) return;
    setAmount((prevState) => prevState - 1);
  };
  return (
    <section className="product-text">
      <p className="product-text__company">Sneaker Company</p>
      <h1 className="product-text__title">Fall Limited Edition Sneakers</h1>
      <p className="product-text__info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-text__price">
        <p className="product-text__price__current">$125.00</p>
        <p className="product-text__price__discount-tag">-50%</p>
        <p className="product-text__price__previous-price">$250.00</p>
      </div>
      <div className="add-to-basket">
        <div className="add-to-basket__amount-selector">
          <button className="minus" onClick={handleDecrement}>
            <img src="images/icon-minus.svg" alt="" />
          </button>
          <p className="amount">{amount}</p>
          <button className="plus" onClick={handleIncrement}>
            <img src="images/icon-plus.svg" alt="" />
          </button>
        </div>
        <div className="add-to-basket__button-wrapper">
          <button
            onClick={() => {
              onAddToCartClick(amount);
              setAmount(0);
            }}
            className="add-to-basket__button"
          >
            <div className="svg-wrapper">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductText;
