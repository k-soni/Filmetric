import { Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Home from "./components/Home";
import { WatchListContextWrapper } from "./contexts/WatchListContext";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </WatchListContextWrapper>
    </>
  );
}

export default App;
