import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Omdb from 'apis/omdb';
import Layout from 'components/Layout';
import MovieUnit from 'components/MovieUnit';

import { AxiosMoviesSearchResponse } from 'react-app-env';

const Search: React.FC = () => {
  const location = useLocation();
  const [movieData, setMovieData] = useState<AxiosMoviesSearchResponse>();

  const getSearchResult = async (searchQuery: string) => {
    const searchParam = new URLSearchParams(searchQuery);
    const query = searchParam.get('query');

    await Omdb.get<AxiosMoviesSearchResponse>('', {
      params: {
        s: query,
      },
    })
      .then((response) => {
        response.status === 200 && setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {});
  };

  useEffect(() => {
    getSearchResult(location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Layout top={false}>
      <div className='items-top justify-center w-full px-4 flex pt-32 pb-32'>
        <div className='grid gap-10 grid-cols-5'>
          {movieData?.Error ? (
            <span>{movieData?.Error}</span>
          ) : (
            movieData?.Search.map((movie) => {
              return <MovieUnit key={movie.imdbID} movie={movie} />;
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
