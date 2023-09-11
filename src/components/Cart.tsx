import styles from "./Cart.module.css";
import thumbnail from "../../public/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../public/images/icon-delete.svg";
import { useEffect, useRef, useState } from "react";

interface CartProps {
  cartItems: number;
  onDeleteCartClick: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onDeleteCartClick }) => {
  const [cartInterfaceToggle, setCartInterfaceToggle] = useState(false);

  const handleCartClick = () => {
    setCartInterfaceToggle((prev) => !prev);
    console.log(cartInterfaceToggle);
  };

  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if the cart is open and if the click is outside the cart
      if (
        cartInterfaceToggle &&
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setCartInterfaceToggle(false);
      }
    }

    // Attach the click event handler
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartInterfaceToggle]);

  return (
    <div className={styles.cartwrapper}>
      <svg
        className={styles.cart}
        width="22"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleCartClick}
      >
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="#69707D"
        />
      </svg>

      {cartItems ? (
        <div className={styles.svgnotification}>{cartItems}</div>
      ) : (
        <></>
      )}

      {cartInterfaceToggle ? (
        <div ref={cartRef} className={styles.cartinventory}>
          <p>Cart</p>
          <hr />

          {cartItems ? (
            <div className={styles.cartinventory_items}>
              <div className={styles.thumbnailwrapper}>
                <img className={styles.thumbnail} src={thumbnail} alt="" />
              </div>
              <div className={styles.cartinventory_itemlist}>
                Fall Limited Edition Sneakers $125.00 x {cartItems}{" "}
                <span>${125 * cartItems}</span>
              </div>
              <div className={styles.buttondelete}>
                <button onClick={onDeleteCartClick}>
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
              <div className={styles.cartinventory_checkout}>Checkout</div>
            </div>
          ) : (
            <p className={styles.emptycart}>Your cart is empty.</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
