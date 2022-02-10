const data = {
  adult: false,
  backdrop_path: '/2Jp2RIwJ3Dt7vamkTt7llVJ7uY.jpg',
  genre_ids: [53, 9648, 18],
  id: 916740,
  original_language: 'en',
  original_title: 'Brazen',
  overview:
    "Mystery writer Grace Miller has killer instincts when it comes to motive - and she'll need every bit of expertise to help solve her sister's murder.",
  popularity: 1212.372,
  poster_path: '/7e4n1GfC9iky9VQzH3cDQz9wYpO.jpg',
  release_date: '2022-01-13',
  title: 'Brazen',
  video: false,
  vote_average: 4.8,
  vote_count: 189,
};

export interface VideoDataType {
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
