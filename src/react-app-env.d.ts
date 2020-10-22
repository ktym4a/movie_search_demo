/// <reference types="react-scripts" />

export interface AxiosUnsplashResponse {
  urls: {
    raw: URL;
    full: URL;
    regular: URL;
    small: URL;
    thumb: URL;
  };
}
