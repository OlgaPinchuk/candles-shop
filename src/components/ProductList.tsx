// Project files
import ProductCard from "./ProductCard";
import { Product, Favorite } from '../interfaces/interfaces';

interface props {
  products: Product[];
  addItem: (item: Favorite) => void;
  isAdded: (id: string) => boolean;
}

export default function ProductList({ products, addItem, isAdded }: props) {
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
