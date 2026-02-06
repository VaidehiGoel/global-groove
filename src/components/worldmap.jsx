import { useNavigate } from "react-router-dom";
import "../styles/map.css";
import map from "../assets/worldMap.svg";

function WorldMap() {
  const navigate = useNavigate();

  function handleClick(e) {
    const code = e.target.id;
    if (code) navigate(`/country/${code}`);
  }

  return (
    <div className="map-container" onClick={handleClick}>
      <img src={map} alt="World Map" />
    </div>
  );
}

export default WorldMap;
