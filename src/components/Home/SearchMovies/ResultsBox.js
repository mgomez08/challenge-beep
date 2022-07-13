import React from "react";
import CardMovie from "./CardMovie";

const ResultsBox = ({ movies }) => {
  return (
    <div className="result-box">
      {movies.map((movie) => (
        <CardMovie key={movie.imdbID} data={movie} />
      ))}
    </div>
  );
};

export default ResultsBox;
