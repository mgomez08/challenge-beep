import React from "react";
import { useSelector } from "react-redux";
import SearchMovies from "../components/Home/SearchMovies/SearchMovies";
import TableMovies from "../components/Home/TableMovies/TableMovies";

const Home = () => {
  const { movies } = useSelector((state) => state.movies);
  return (
    <main className="container d-flex flex-column align-items-center mt-3">
      <SearchMovies />
      {movies.length > 0 ? <TableMovies /> : <p>No hay películas agregadas</p>}
    </main>
  );
};

export default Home;
