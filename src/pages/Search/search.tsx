import React, { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Omdb from 'apis/omdb';
import Layout from 'components/Layout';
import MovieUnit from 'components/MovieUnit';

import { AxiosMoviesSearchResponse } from 'react-app-env';
import { Store } from 'store';

const Search: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const location = useLocation();

  const getSearchResult = async (searchQuery: string) => {
    console.log('SearchPage: call => getSearchResult()');
    const searchParam = new URLSearchParams(searchQuery);
    const query = searchParam.get('query');

    await Omdb.get<AxiosMoviesSearchResponse>('', {
      params: {
        s: query,
      },
    })
      .then((response) => {
        response.status === 200 && setGlobalState({ movieData: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {});
  };

  useEffect(() => {
    console.log('SearchPage: call => useEffect()');
    getSearchResult(location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return useMemo(() => {
    console.log('SearchPage: render()');
    return (
      <Layout top={false}>
        <div className='items-top justify-center w-full px-4 flex pt-32 pb-32'>
          <div className='grid gap-10 grid-cols-5'>
            {globalState.movieData?.Error ? (
              <span>{globalState.movieData?.Error}</span>
            ) : (
              globalState.movieData?.Search.map((movie) => {
                return <MovieUnit key={movie.imdbID} movie={movie} />;
              })
            )}
          </div>
        </div>
      </Layout>
    );
  }, [globalState.movieData]);
};

export default Search;
