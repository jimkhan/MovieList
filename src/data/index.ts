export interface CommonProps {
  isLoading: string;
  movieList: MovieData[];
}
export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: genericProps[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companiesProps[];
  production_countries: production_countriesProps[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_languagesProps[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

interface spoken_languagesProps {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface production_countriesProps {
  iso_3166_1: string;
  name: string;
}

interface production_companiesProps {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface genericProps {
  id: number;
  name: string;
}
