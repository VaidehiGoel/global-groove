import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken, fetchArtistsByCountry } from "../services/spotify";

function Country() {
  const { code } = useParams();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArtists() {
      const token = await getToken();
      const data = await fetchArtistsByCountry(token, code);
      setArtists(data.artists.items);
      setLoading(false);
    }
    loadArtists();
  }, [code]);

  if (loading) return <p>Loading artists…</p>;
const genreCount = {};

artists.forEach(artist => {
  artist.genres.forEach(genre => {
    genreCount[genre] = (genreCount[genre] || 0) + 1;
  });
});

  return (
    <div>
      <h2 className="section-title">Popular Artists</h2>

      <div className="artists-grid">
  {artists.map(artist => (
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

      <h3 className="section-title">Popular Genres</h3>

<div>
  <div className="country-genres">
  {Object.keys(genreCount).map(g => (
    <span key={g}>{g}</span>
  ))}
</div>

</div>

    </div>
    
    
  );
}

export default Country;
