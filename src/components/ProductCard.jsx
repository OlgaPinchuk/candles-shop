// NPM Packages
import { useState, useMemo } from "react";

export default function ProductCard({ product, addItem, isAdded }) {
  // Constants
  const { name, description, details, imageURL, price, discount, id } = product;

  // State
  const [isInFavorites, setIsInFavorites] = useState(() => isAdded(id));

  const finalPrice = useMemo(() => {
    return discount ? Math.ceil(((100 - discount) / 100) * price) : price;
  }, [price, discount]);

  // Methods
  function handleClick() {
    addItem({
      name: product.name,
      price: finalPrice,
      id: product.id,
    });
    setIsInFavorites(true);
  }

  return (
    <article className="product-card flex-column">
      <img src={imageURL} alt="Candle item" />

      <div className="card-content flex-column">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <details className="product-details">
          <summary>More info</summary>
          <ul>
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>

        <p className={`product-price ${discount ? "reduced-price" : ""}`}>
          <strong>{finalPrice}:- </strong>
          {discount > 0 && <s>{price}</s>}
        </p>
        <button
          className="add-button"
          disabled={isInFavorites}
          onClick={handleClick}
        >
          {isInFavorites ? "Added" : "Add to list"}
        </button>
      </div>
    </article>
  );
}
