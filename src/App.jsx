import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import Artist from "./pages/artist";
import Favorites from "./pages/favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
