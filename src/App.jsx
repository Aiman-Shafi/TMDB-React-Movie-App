import { Route, Routes } from "react-router";
import Home from "./components/Home";
import "./App.css";
import MovieDetail from "./components/movieDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
