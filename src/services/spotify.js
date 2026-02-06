let token = null;
let expiry = null;

export async function getToken() {
  if (token && Date.now() < expiry) return token;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(
          import.meta.env.VITE_SPOTIFY_ID +
            ":" +
            import.meta.env.VITE_SPOTIFY_SECRET
        )
    },
    body: "grant_type=client_credentials"
  });

  const data = await res.json();
  token = data.access_token;
  expiry = Date.now() + data.expires_in * 1000;

  return token;
}

export async function fetchArtistsByCountry(token, code) {
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=year:2024&type=artist&market=${code}&limit=20`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return res.json();
}
