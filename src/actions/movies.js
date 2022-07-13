import types from "../types";

export const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  payload: movie,
});

export const removeMovie = (imdbID) => ({
  type: types.REMOVE_MOVIE,
  payload: imdbID,
});
