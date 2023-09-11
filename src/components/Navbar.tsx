import styles from "./Navbar.module.css";
import logo from "../../public/images/logo.svg";
import { useState } from "react";
import Cart from "./Cart";

interface NavbarProps {
  cartItems: number;
  onDeleteCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onDeleteCartClick }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.menubutton} onClick={toggleMenu}>
        <button className={isMenuVisible ? styles.active : ""}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </button>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <Cart cartItems={cartItems} onDeleteCartClick={onDeleteCartClick} />
      <div className={styles.avatarwrapper}>
        <img className={styles.avatar} src="images/image-avatar.png" alt="" />
      </div>

      <div
        className={`${styles.modal} ${isMenuVisible ? styles.visible : ""}`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
};

export default Navbar;
