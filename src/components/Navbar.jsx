export const Navbar = ({ cartCount, setView }) => (
  <div className="flex justify-between items-center px-12 py-5 bg-white">

    <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

    <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
      <span>Products</span>
      <span>Features</span>
      <span>Pricing</span>
      <span>Testimonials</span>
      <span>FAQ</span>
    </div>

    <div className="flex items-center gap-5">

      {/* ✅ CART ICON FIX */}
      <div 
        onClick={() => setView("cart")}
        className="relative cursor-pointer"
      >
        <img 
          src="/assets/products/shopping-cart.png" 
          className="w-6"
        />

        {/* COUNT BADGE */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 rounded-full">
            {cartCount}
          </span>
        )}
      </div>

      <span className="text-gray-600 text-sm cursor-pointer">Login</span>

      <button className="bg-gradient-to-r to-purple-600 from-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium">
        Get Started
      </button>
    </div>
  </div>
);