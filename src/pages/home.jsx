import WorldMap from "../components/worldmap";

function Home() {
  return (
    <div className="home-page page">
      <div className="page-content">
        <h1 className="home-title">Global Groove</h1>
        <p className="home-subtitle">
          Music Beyond Borders. Explore the world’s top artists and genres by country. Click on a country to discover its unique musical landscape and find your next favorite artist!!
        </p>
      </div>

      <div className="map-section">
        <WorldMap />
      </div>
    </div>
  );
}


export default Home;
