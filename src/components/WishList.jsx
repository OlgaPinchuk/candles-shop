export default function WishList({ items }) {
  const totalSum = items.reduce(
    (previous, current) => previous + current.price,
    0
  );

  return (
    <article className="wishlist-section flex-column">
      <h2>Wishlist</h2>
      {items.length === 0 ? (
        <p className="empty-list-warning">
          <i>Your wishlist is currently empty</i> &#128533;
        </p>
      ) : (
        <>
          <ul>
            {items.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <p className="total-sum">Total sum: {totalSum}:-</p>
        </>
      )}
    </article>
  );
}
