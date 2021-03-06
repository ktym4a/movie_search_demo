import React, { useContext, useEffect, useState } from 'react';

import Omdb from 'apis/omdb';
import { useParams } from 'react-router-dom';

import { MoviesDetailProps, ParamTypes } from 'react-app-env';

import { Store } from 'store';

import ReactLoading from 'react-loading';
import Rating from 'react-rating';

const SearchMain: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [movieData, setMovieData] = useState<MoviesDetailProps | undefined>();
  const [rated, setRated] = useState<number>(0);

  const { imdbID } = useParams<ParamTypes>();

  const getSearchResult = async (imdbID: string) => {
    await Omdb.get<MoviesDetailProps>('', {
      params: {
        i: imdbID,
        plot: 'full',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setGlobalState({ background: response.data.Poster });
          setMovieData(response.data);
          const metaScore = response.data?.Metascore
            ? parseInt(response.data.Metascore)
            : 0;
          setRated(metaScore / 20);
        }
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
    getSearchResult(imdbID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div>
          {movieData && (
            <div>
              <div className='bg-header px-4 text-white mb-3'>
                <h1 className='font-bold text-4xl'>
                  {movieData.Title}
                  <span className='text-xl'>（{movieData.Released}）</span>
                </h1>
                <div>
                  {movieData.Runtime} | {movieData.Genre}
                </div>
              </div>
              <div className='text-center mb-3'>
                <img
                  src={movieData.Poster}
                  alt={movieData.Title}
                  className='m-auto'
                />
              </div>
              <div className='text-center mb-3'>
                <Rating initialRating={rated} readonly />
              </div>
              <div className='bg-header p-4 text-white mb-3'>
                {movieData.Plot}
              </div>
              <div>
                <div>Actors: {movieData.Actors}</div>
                <div>Language: {movieData.Language}</div>
                <div>Country: {movieData.Country}</div>
                <div>Awards: {movieData.Awards}</div>
                <div>Type: {movieData.Type}</div>
                <div>Production: {movieData.Production}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchMain;
