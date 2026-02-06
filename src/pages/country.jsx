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
      <h2>Popular Artists</h2>

      {artists.map(a => (
        <Link key={a.id} to={`/artist/${a.id}`}>
          <div>{a.name}</div>
        </Link>
      ))}
      <h3>Popular Genres</h3>

<div>
  {Object.keys(genreCount).map(g => (
    <span key={g} style={{ marginRight: "8px" }}>
      {g}
    </span>
  ))}
</div>

    </div>
    
    
  );
}

export default Country;
