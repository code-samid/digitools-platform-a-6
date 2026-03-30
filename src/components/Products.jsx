import { ProductCard } from "./ProductCard";
export const Products = ({ addToCart, products }) => (
  <div className="grid md:grid-cols-3 gap-5 p-6">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} addToCart={addToCart} />
    ))}
  </div>
);
