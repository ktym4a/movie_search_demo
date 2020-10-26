import React, { useState, useEffect, Fragment, useContext } from 'react';

import Unsplash from 'apis/unsplash';

import { AxiosUnsplashResponse } from 'react-app-env';

import './css/background.css';
import { Store } from 'store';

const Background: React.FC = React.memo(({ children }) => {
  const { globalState, setGlobalState } = useContext(Store);
  const [loadedBG, setLoadedBG] = useState<boolean>(true);

  const getRandomImage = async () => {
    console.log('Background: call => getRandomImage()');
    await Unsplash.get<AxiosUnsplashResponse>('/photos/random')
      .then((response) => {
        response.status === 200 &&
          setGlobalState({ background: response.data.urls.regular });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setLoadedBG(false);
      });
  };

  useEffect(() => {
    console.log('Background: call => useEffect()');
    getRandomImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('Background: render()');
  return (
    <Fragment>
      <div
        className={`bg-cover bg-center blurBg overflow-hidden z-0 relative ${
          loadedBG ? 'hidden' : 'block'
        }`}
        style={{ backgroundImage: `url(${globalState.background})` }}
      >
        {children}
      </div>
    </Fragment>
  );
});

export default Background;
