import { ProductCard } from "./ProductCard";
import {Cart} from "./Cart";

export const Products = ({
    addToCart,
    products,
    setView,
    cartCount,
    view,
    cart,
    remove,
    checkout
}) => {
    return (
        <div className="px-10 py-20 bg-gray-50 text-center">

            {/* HEADER */}
            <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.
            </p>

            {/* TOGGLE */}
            <div className="flex justify-center mt-6">
                <div className="bg-gray-100 p-1 rounded-full flex gap-1">

                    {/* PRODUCTS BUTTON */}
                    <button
                        onClick={() => setView("products")}
                        className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${view === "products"
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105"
                            : "bg-white text-gray-600 hover:bg-purple-100"
                            }`}
                    >
                        Products
                    </button>

                    {/* CART BUTTON */}
                    <button
                        onClick={() => setView("cart")}
                        className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${view === "cart"
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105"
                            : "bg-white text-gray-600 hover:bg-purple-100"
                            }`}
                    >
                        Cart ({cartCount})
                    </button>

                </div>
            </div>

            {/* ✅ CART SHOWS HERE */}
            {view === "cart" && (
                <Cart
                    cart={cart}
                    remove={remove}
                    checkout={checkout}
                />
            )}

            {/* ✅ PRODUCTS GRID */}
            {view === "products" && (
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};