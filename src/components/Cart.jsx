export const Cart = ({ cart, remove, checkout }) => {

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-gray-50 py-20">

            <div className="max-w-4xl mx-auto bg-white border rounded-2xl p-8">

                <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-400">Cart is empty</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center bg-gray-100 rounded-xl px-6 py-4 
                                    transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => remove(item.id)}
                                        className="text-pink-500 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <span className="text-gray-500">Total:</span>
                            <span className="text-xl font-semibold">${total}</span>
                        </div>

                        <button
                            onClick={checkout}
                            className="w-full mt-6 py-3 rounded-full text-white font-medium 
                            bg-gradient-to-r from-indigo-600 to-purple-600 
                            hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Proceed To Checkout
                        </button>
                    </>
                )}

            </div>
        </div>
    );
};