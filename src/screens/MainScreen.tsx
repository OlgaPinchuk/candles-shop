// Project files
import ProductList from "../components/ProductList";
import WishList from "../components/WishList";
import useFavorites from "../hooks/useFavorites";

import { Product, Favorite } from "../interfaces/interfaces";

interface props {
  products: Product[];
}

export default function MainScreen({ products }: props) {
  // State
  const [list, setList] = useFavorites();

  //Methods
  function addItem(item: Favorite) {
    setList([...list, item]);
  }

  function isAdded(id: string): boolean {
    return list.some((item) => item.id === id);
  }

  return (
    <section className="screen-content main-screen">
      <ProductList products={products} addItem={addItem} isAdded={isAdded} />
      <WishList items={list} />
    </section>
  );
}
