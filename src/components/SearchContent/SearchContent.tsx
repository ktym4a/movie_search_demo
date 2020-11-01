import React, { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Omdb from 'apis/omdb';

import { AxiosMoviesSearchResponse } from 'react-app-env';

import MovieUnit from 'components/MovieUnit';

import { Store } from 'store';

import ReactLoading from 'react-loading';

const SearchContent: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const location = useLocation();

  const getSearchResult = async (searchQuery: string) => {
    const searchParam = new URLSearchParams(searchQuery);
    const query = searchParam.get('query');
    await Omdb.get<AxiosMoviesSearchResponse>('', {
      params: {
        s: query,
        page: globalState.paged,
      },
    })
      .then((response) => {
        response.status === 200 && setGlobalState({ movieData: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        setGlobalState({ loading: false });
      });
  };

  useEffect(() => {
    setGlobalState({ loading: true });
    getSearchResult(location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, globalState.paged]);

  return useMemo(() => {
    return (
      <React.Fragment>
        {globalState.loading ? (
          <ReactLoading
            type={'spinningBubbles'}
            color={'#64a281'}
            height={667}
            width={375}
          />
        ) : (
          <div className='grid gap-10 grid-cols-5'>
            {globalState.movieData?.Error ? (
              <span>{globalState.movieData?.Error}</span>
            ) : (
              globalState.movieData?.Search.map((movie) => {
                return <MovieUnit key={movie.imdbID} movie={movie} />;
              })
            )}
          </div>
        )}
      </React.Fragment>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.movieData, globalState.loading]);
};

export default SearchContent;
