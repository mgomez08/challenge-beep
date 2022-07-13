const BASE_URL = process.env.REACT_APP_OMDB_BASE_URL;
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesByTitle = async (title) => {
  try {
    const url = `${BASE_URL}/?s=${title}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
