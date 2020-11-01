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

export interface AxiosMoviesSearchResponse {
  Search: [MoviesSearchProps];
  Response: boolean;
  Error?: string;
  totalResults?: number;
}

export interface MovieUnitProps {
  movie: MoviesSearchProps;
}

export interface MoviesSearchProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesDetailProps {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbVotes: string;
  Type: string;
  Production: string;
}

export interface LayoutProps {
  top: boolean;
}

export interface GlobalStateProps {
  background: string;
  serach: string;
  movieData?: AxiosMoviesSearchResponse;
  paged: number;
  loading: boolean;
}

interface ParamTypes {
  imdbID: string;
}
