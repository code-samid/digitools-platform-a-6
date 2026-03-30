import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { products } from "./data/products"; // ✅ THIS LINE

import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Stats } from "./components/Stats";

import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Steps } from "./components/Steps";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
    toast.success("Added to cart");
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
    toast.error("Removed");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout done");
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />



      {view === "products" ? (
        <Products
          addToCart={addToCart}
          products={products}
          setView={setView}          // ✅ ADD THIS
          cartCount={cart.length}   // ✅ ADD THIS
        />
      ) : (
        <Cart cart={cart} remove={remove} checkout={checkout} />
      )}

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer />
    </div>
  );
}
