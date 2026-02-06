import WorldMap from "../components/worldmap";

function Home() {
  return (
    <div className="home-page">
      <div className="page-content">
        <h1 className="home-title">Global Groove</h1>
        <p className="home-subtitle">
          This is exploration, not recommendation.
        </p>
      </div>

      <div className="map-section">
        <WorldMap />
      </div>
    </div>
  );
}


export default Home;
