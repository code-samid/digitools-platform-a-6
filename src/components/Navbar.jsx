export const Navbar = () => (
  <div className="flex justify-between items-center px-12 py-5 bg-white">
    
    {/* Logo */}
    <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
      <span>Products</span>
      <span>Features</span>
      <span>Pricing</span>
      <span>Testimonials</span>
      <span>FAQ</span>
    </div>

    {/* Right side */}
    <div className="flex items-center gap-5">

      <span><img src="./assets/products/shopping-cart.png" alt="" /></span>

      <span className="text-gray-600 text-sm cursor-pointer">Login</span>

      <button className="bg-gradient-to-r to-purple-600 from-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium">
        Get Started
      </button>
    </div>
  </div>
);