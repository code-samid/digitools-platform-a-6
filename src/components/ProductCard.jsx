export const ProductCard = ({ product, addToCart }) => (
  <div className="border p-4 rounded shadow">
    <h2>{product.icon} {product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}/{product.period}</p>
    <p className="text-purple-500">{product.tagType}</p>
    <ul>
      {product.features.map((f, i) => <li key={i}>✔ {f}</li>)}
    </ul>
    <button
      className="btn btn-primary w-full mt-3"
      onClick={() => addToCart(product)}
    >Buy Now</button>
  </div>
);