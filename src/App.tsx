import "./App.css";
import Product from "./components/Product.tsx";
import Navbar from "./components/Navbar.tsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const onAddToCartClick = (amount: number) => {
    setCartItems((prev) => prev + amount);
  };

  const onDeleteCartClick = () => {
    setCartItems(0);
  };
  return (
    <>
      <Navbar cartItems={cartItems} onDeleteCartClick={onDeleteCartClick} />
      <Product onAddToCartClick={onAddToCartClick} />
    </>
  );
}

export default App;
