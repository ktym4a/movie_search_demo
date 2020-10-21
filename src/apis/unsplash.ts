import axios, { AxiosResponse } from 'axios';

import { AxiosUnsplashResponse } from 'react-app-env';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});

export const getRandomImage = (): Promise<
  AxiosResponse<AxiosUnsplashResponse>
> => {
  return instance
    .get<AxiosUnsplashResponse>('/photos/random')
    .then((response) => {
      return response;
    });
};
