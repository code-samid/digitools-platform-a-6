export const Cart = ({ cart, remove, checkout }) => (
  <div className="p-6">
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <div>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-3">
            <p>{item.icon} {item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        ))}
        <button className="btn btn-primary w-full" onClick={checkout}>
          Proceed to Checkout
        </button>
      </div>
    )}
  </div>
);
