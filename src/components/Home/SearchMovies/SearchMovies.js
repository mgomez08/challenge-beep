import React, { useState } from "react";
import { getMoviesByTitle } from "../../../api/movies";
import Loader from "../../Other/Loader/Loader";
import ResultsBox from "./ResultsBox";
import "./SearchMovies.css";

const SearchMovies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = async (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      setLoading(true);
      const response = await getMoviesByTitle(e.target.value);
      if (response.Response === "True") {
        setMovies(response.Search);
        setOpen(true);
      } else {
        setOpen(false);
        setMovies([]);
      }
      setLoading(false);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className="search-movies">
      <h2 className="h2">Busca una película</h2>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Escribe algo"
        value={search}
        onChange={handleChange}
        className="form-control"
      />
      {loading && <Loader />}
      {open && !loading && <ResultsBox movies={movies} />}
      {movies.length === 0 && !loading && (
        <p className="mt-2">
          No se encontraron resultados por <strong>{search}</strong>
        </p>
      )}
    </div>
  );
};

export default SearchMovies;
