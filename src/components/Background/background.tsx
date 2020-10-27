import React, { useEffect, Fragment, useContext, useMemo } from 'react';

import Unsplash from 'apis/unsplash';

import { Store } from 'store';

import { AxiosUnsplashResponse } from 'react-app-env';

import './css/background.css';
import backgroound from 'static/images/background.jpg';

const Background: React.FC = ({ children }) => {
  const { globalState, setGlobalState } = useContext(Store);

  const getRandomImage = async () => {
    console.log('Background: call => getRandomImage()');
    await Unsplash.get<AxiosUnsplashResponse>('/photos/random')
      .then((response) => {
        response.status === 200 &&
          setGlobalState({ background: response.data.urls.regular });
      })
      .catch((error) => {
        console.log(error);
        setGlobalState({ background: backgroound });
      });
  };

  useEffect(() => {
    console.log('Background: call => useEffect()');
    getRandomImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(() => {
    console.log('Background: render()');
    // The rest of your rendering logic
    return (
      <Fragment>
        <div
          className='bg-cover bg-center blurBg overflow-hidden z-0 relative block'
          style={{ backgroundImage: `url(${globalState.background})` }}
        >
          {children}
        </div>
      </Fragment>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.background]);
};

export default Background;
