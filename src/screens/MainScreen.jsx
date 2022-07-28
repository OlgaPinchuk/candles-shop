// Project files
import ProductList from "../components/ProductList";
import WishList from "../components/WishList";
import useFavorites from "../hooks/useFavorites";

export default function MainScreen({ products }) {
  // State
  const [list, setList] = useFavorites();

  //Methods
  function addItem(item) {
    setList([...list, item]);
  }

  function isAdded(id) {
    return list.some((item) => item.id === id);
  }

  return (
    <section className="screen-content main-screen">
      <ProductList products={products} addItem={addItem} isAdded={isAdded} />
      <WishList items={list} />
    </section>
  );
}
