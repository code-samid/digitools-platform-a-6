import { ProductCard } from "./ProductCard";

export const Products = ({ addToCart, products, setView, cartCount }) => (
  <div className="px-10 py-20 bg-gray-50 text-center">

    <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
    <p className="text-gray-500 mt-2 max-w-xl mx-auto">
      Choose from our curated collection of premium digital products designed
      to boost your productivity and creativity.
    </p>

    {/* TOGGLE */}
    <div className="flex justify-center mt-6 gap-4">
      <button
        onClick={() => setView("products")}
        className="px-5 py-2 rounded-full bg-gradient-to-r bg-gradient-to-r to-purple-600 from-indigo-600 text-white"
      >
        Products
      </button>

      <button
        onClick={() => setView("cart")}
        className="px-5 py-2 rounded-full border text-gray-600"
      >
        Cart ({cartCount})
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  </div>
);