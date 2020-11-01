import React, { useContext, useEffect } from 'react';

import Omdb from 'apis/omdb';
import { useParams } from 'react-router-dom';

import { MoviesDetailProps, ParamTypes } from 'react-app-env';

import { Store } from 'store';

import ReactLoading from 'react-loading';

const SearchMain: React.FC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const { imdbID } = useParams<ParamTypes>();

  const getSearchResult = async (imdbID: string) => {
    await Omdb.get<MoviesDetailProps>('', {
      params: {
        i: imdbID,
        plot: 'full',
      },
    })
      .then((response) => {
        response.status === 200 &&
          setGlobalState({ background: response.data.Poster });
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
        <div className='grid gap-10 grid-cols-5'>test</div>
      )}
    </React.Fragment>
  );
};

export default SearchMain;
