import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken } from "../services/spotify";

function Artist() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function loadArtist() {
      const token = await getToken();

      const artistRes = await fetch(
        `https://api.spotify.com/v1/artists/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const tracksRes = await fetch(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setArtist(await artistRes.json());
      setTracks((await tracksRes.json()).tracks);
    }

    loadArtist();
  }, [id]);

  if (!artist) return <p>Loading artist…</p>;

function addToFavorites() {
  const existing =
    JSON.parse(localStorage.getItem("favorites")) || [];

  // prevent duplicates
  if (existing.find(a => a.id === artist.id)) return;

  localStorage.setItem(
    "favorites",
    JSON.stringify([...existing, artist])
  );

  alert("Added to favourites!");
}

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.genres.join(", ")}</p>
        <button onClick={addToFavorites}>
  ❤️ Add to Favourites
</button>

      <h3>Top Tracks</h3>
      {tracks.map(track => (
        <div key={track.id}>
          <p>{track.name}</p>
          {track.preview_url && (
            <audio controls src={track.preview_url} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Artist;
