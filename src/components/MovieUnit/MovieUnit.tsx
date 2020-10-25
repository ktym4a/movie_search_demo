import React from 'react';

import { MovieUnitProps } from 'react-app-env';

const MovieUnit: React.FC<MovieUnitProps> = ({ movie }) => {
  return (
    <div className='grid grid-rows-movieUnitLayout'>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <div>
          {movie.Year} - {movie.Type}
        </div>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieUnit;
