import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import MovieCard from "./movieCard";
import './index.css'


 function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:id" element={<MovieCard />} />
    </Routes>


  )
}
export default App
