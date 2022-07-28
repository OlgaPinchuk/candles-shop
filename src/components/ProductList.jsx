// Project files
import ProductCard from "./ProductCard";

export default function ProductList({ products, addItem, isAdded }) {
  return (
    <ul className="product-list">
      {products.map((item) => (
        <li key={item.id} className="product-list-item">
          <ProductCard product={item} addItem={addItem} isAdded={isAdded} />
        </li>
      ))}
    </ul>
  );
}
