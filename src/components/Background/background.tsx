import React, { useState, useEffect, Fragment } from 'react';

import Unsplash from 'apis/unsplash';

import { AxiosUnsplashResponse } from 'react-app-env';

const Background: React.FC = ({ children }) => {
  const [background, setBackground] = useState<URL>();

  const getRandomImage = async () => {
    await Unsplash.get<AxiosUnsplashResponse>('/photos/random').then(
      (response) => {
        setBackground(response.data.urls.full);
      }
    );
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <Fragment>
      {children}
      test
      {background}
    </Fragment>
  );
};

export default Background;
