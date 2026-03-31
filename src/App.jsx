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
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

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

    {/* FULL WIDTH */}
    <Navbar cartCount={cart.length} />


    {/* CENTERED */}
    <Container>
      <Banner />
    </Container>


    {/* FULL WIDTH (UNDER BANNER) */}
    <Stats />


    {/* CENTERED */}
    <Container>

      {view === "products" ? (
        <Products
          addToCart={addToCart}
          products={products}
          setView={setView}
          cartCount={cart.length}
        />
      ) : (
        <Cart cart={cart} remove={remove} checkout={checkout} />
      )}

      <Steps />

      <Pricing />

    </Container>


    {/* FULL WIDTH */}
    <CTASection />

    <Footer />

    <ToastContainer />

  </div>
  );
}
