import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../actions/movies";

const CardMovie = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addMovie(data));
  };
  return (
    <div
      className="card d-flex flex-row p-1 btn text-start"
      onClick={handleClick}
    >
      <img
        src={data?.Poster}
        alt={data?.Title}
        className="rounded-start img-poster"
      />
      <div className="card-text mx-2">
        <p>
          <strong>{data?.Title}</strong>
        </p>
        <p>Se estrenó en {data?.Year}</p>
        <p className="text-muted">Tipo: {data?.Type}</p>
      </div>
    </div>
  );
};

export default CardMovie;
