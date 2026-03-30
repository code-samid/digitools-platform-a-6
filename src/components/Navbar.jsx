export const Navbar = ({ cartCount }) => (
  <div className="flex justify-between items-center p-4 shadow">
    <h1 className="text-xl font-bold text-purple-600">DigiTools</h1>
    <p className="text-lg">🛒 {cartCount}</p>
  </div>
);