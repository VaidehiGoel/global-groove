import { Link } from "react-router-dom";

function Favorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites-page page">
      <div className="page-content">
        <h1 className="section-title">Your Favourites</h1>

        {favorites.length === 0 && (
          <p className="empty-text">
            You haven’t added any artists yet.
          </p>
        )}
      </div>

      {favorites.length > 0 && (
        <div className="favorites-section">
          <div className="artists-grid">
            {favorites.map(artist => (
              <Link
                to={`/artist/${artist.id}`}
                key={artist.id}
                className="artist-card"
              >
                <img
                  src={artist.images[0]?.url}
                  alt={artist.name}
                  className="artist-image"
                />
                <h4 className="artist-name">{artist.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
