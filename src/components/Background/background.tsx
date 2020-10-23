import React, { useState, useEffect, Fragment } from 'react';

import Unsplash from 'apis/unsplash';

import { AxiosUnsplashResponse } from 'react-app-env';

import './css/background.css';

const Background: React.FC = ({ children }) => {
  const [background, setBackground] = useState<string>('');

  const getRandomImage = async () => {
    await Unsplash.get<AxiosUnsplashResponse>('/photos/random').then(
      (response) => {
        setBackground(response.data.urls.regular);
      }
    );
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <Fragment>
      <div
        className='bg-cover bg-center blurBg overflow-hidden z-0 relative'
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Background;
