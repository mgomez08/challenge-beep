import types from "../types";

export const startAddMovie = (movie) => async (dispatch, getState) => {
  try {
    const { movies } = getState().movies;
    localStorage.setItem("movies", JSON.stringify([...movies, movie]));
    dispatch(addMovie(movie));
  } catch (error) {
    console.log(error);
  }
};
const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  payload: movie,
});

export const startRemoveMovie = (imdbID) => async (dispatch, getState) => {
  try {
    const { movies } = getState().movies;
    localStorage.setItem(
      "movies",
      JSON.stringify(movies.filter((movie) => movie.imdbID !== imdbID))
    );
    dispatch(removeMovie(imdbID));
  } catch (error) {
    console.log(error);
  }
};
const removeMovie = (imdbID) => ({
  type: types.REMOVE_MOVIE,
  payload: imdbID,
});

export const startSetMovies = () => async (dispatch) => {
  try {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    dispatch(setMovies(movies));
  } catch (error) {
    console.log(error);
  }
};

const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  payload: movies,
});
