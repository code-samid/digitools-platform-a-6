export const ProductCard = ({ product, addToCart }) => (
    <div className="bg-white border rounded-2xl p-6 shadow-sm 
hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">

        {/* TAG */}
        <span className="absolute top-4 right-4 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            {product.tagType}
        </span>

        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
            {product.icon}
        </div>

        {/* TITLE */}
        <h2 className="font-semibold text-lg">{product.name}</h2>

        {/* DESC */}
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>

        {/* PRICE */}
        <h3 className="mt-4 font-bold text-xl">
            ${product.price}
            <span className="text-sm text-gray-400">/{product.period}</span>
        </h3>

        {/* FEATURES */}
        <ul className="text-sm mt-4 space-y-2">
            {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✔</span> {f}
                </li>
            ))}
        </ul>

        {/* BUTTON */}
        <button
            onClick={() => addToCart(product)}
            className="w-full mt-6 py-3 rounded-full text-white font-medium 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:opacity-90 active:scale-95 transition-all duration-200"
        >
            Buy Now
        </button>
    </div>
);