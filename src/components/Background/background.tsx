import React, { useState, useEffect, Fragment } from 'react';

import Unsplash from 'apis/unsplash';
import backgroound from 'static/images/background.jpg';

import { AxiosUnsplashResponse } from 'react-app-env';

import './css/background.css';

const Background: React.FC = ({ children }) => {
  const [background, setBackground] = useState<string>(backgroound);
  const [loadedBG, setloadedBG] = useState<boolean>(true);

  const getRandomImage = async () => {
    await Unsplash.get<AxiosUnsplashResponse>('/photos/random')
      .then((response) => {
        response.status === 200 && setBackground(response.data.urls.regular);
        setloadedBG(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRandomImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div
        className={`bg-cover bg-center blurBg overflow-hidden z-0 relative ${
          loadedBG ? 'hidden' : 'block'
        }`}
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Background;
