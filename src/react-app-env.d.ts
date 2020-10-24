/// <reference types="react-scripts" />

export interface AxiosUnsplashResponse {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface LayoutProps {
  top: boolean;
}
