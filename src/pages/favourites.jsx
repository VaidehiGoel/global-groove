function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h1>Favourites</h1>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map(a => (
        <div key={a.id}>{a.name}</div>
      ))}
    </div>
  );
}

export default Favorites;
