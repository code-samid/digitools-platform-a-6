import { ProductCard } from "./ProductCard";

export const Products = ({ addToCart, products, setView, cartCount, view }) => (
    <div className="px-10 py-20 bg-gray-50 text-center">

        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
        </p>

        {/* TOGGLE (FIXED WITH ACTIVE STATE) */}
        <div className="flex justify-center mt-6">
            <div className="bg-gray-100 p-1 rounded-full flex gap-1">

                {/* PRODUCTS BUTTON */}
                <button
                    onClick={() => setView("products")}
                    className={`px-5 py-2 rounded-full text-sm transition ${view === "products"
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                            : "text-gray-600"
                        }`}
                >
                    Products
                </button>

                {/* CART BUTTON */}
                <button
                    onClick={() => setView("cart")}
                    className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ease-in-out ${view === "cart"
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105"
                            : "text-gray-600 hover:bg-white hover:shadow"
                        }`}
                >
                    Cart ({cartCount})
                </button>

            </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>

    </div>
);