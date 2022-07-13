import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../../actions/movies";
import "./TableMovies.css";

const TableMovies = () => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleDeleteMovie = (imdbID) => {
    dispatch(removeMovie(imdbID));
  };
  return (
    <div className="mt-5 table-responsive w-100 table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Poster</th>
            <th scope="col">Título</th>
            <th scope="col">imdbId</th>
            <th scope="col">Año de Estreno</th>
            <th scope="col">Tipo</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.imdbID}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-table"
                />
              </td>
              <td>{movie.Title}</td>
              <td>{movie.imdbID}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteMovie(movie.imdbID)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMovies;
