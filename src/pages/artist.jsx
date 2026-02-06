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
    <div className="artist-page page">
        <div className="page-content">
      <div className="artist-header">
        <h1>{artist.name}</h1>
        <div className="artist-genres">
  {artist.genres.map(g => (
    <span key={g}>{g}</span>
  ))}
  </div>
</div>


        <button className="favorite-button" onClick={addToFavorites}>
          ❤️ Add to Favourites
        </button>
      </div>

      <h3 className="tracks-heading">Top Tracks</h3>

      <div className="tracks-grid">
        {tracks.map(track => (
          <div className="track-card" key={track.id}>
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="track-image"
            />

            <h4 className="track-title">{track.name}</h4>

            <p className="track-date">
              Release Date: {track.album.release_date}
            </p>

            {track.preview_url && (
              <audio controls src={track.preview_url} />
            )}

            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-button"
            >
              Open in Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist;
