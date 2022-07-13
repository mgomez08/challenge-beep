import types from "../types";

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case types.REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.imdbID !== action.payload),
      };

    default:
      return state;
  }
};
