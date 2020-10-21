/// <reference types="react-scripts" />

interface Unsplash {
  urls: {
    raw: URL;
    full: URL;
    regular: URL;
    small: URL;
    thumb: URL;
  };
}

export interface AxiosUnsplashResponse {
  data: Unsplash;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}
