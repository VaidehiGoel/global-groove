import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import Artist from "./pages/artist";
import Favourites from "./pages/favourites";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
