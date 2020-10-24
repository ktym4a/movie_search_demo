import React from 'react';

import { MovieUnitProps } from 'react-app-env';

const MovieUnit: React.FC<MovieUnitProps> = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>Year: {movie.Year}</div>
      <div>Type: {movie.Type}</div>
      <div>Title: {movie.Title}</div>
    </div>
  );
};

export default MovieUnit;
