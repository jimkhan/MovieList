import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export interface VideoInfoProps {
  __v: number;
  _id: string;
  batchId: string;
  classTiming: string;
  createdAt: string;
  description: string;
  duration: number;
  resources: [
    {
      __v: number;
      _id: string;
      allowedUsers: [];
      createdAt: string;
      path: string;
      resourceType: string;
      subjects: [];
      tags: [];
      thumbnail: string;
      title: string;
      updatedAt: string;
    },
  ];
  reviews: string[];
  serialNumber: number;
  title: string;
  updatedAt: string;
}
export type RootStackParamList = {
  Home: undefined;
  LetestMovieScreen: {
    movieInfo: VideoInfoProps;
  };
  PopularMovieScreen: {
    movieInfo: VideoInfoProps;
  };
  MovieDetailsScreen: {
    detailsData: object;
  };
};

export type LetestMovieScreenNavigationProps = {
  navigation: BottomTabNavigationProp<RootStackParamList, 'LetestMovieScreen'>;
  route: RouteProp<RootStackParamList, 'LetestMovieScreen'>;
};
export type PopularMovieScreenNavigationProps = {
  navigation: BottomTabNavigationProp<RootStackParamList, 'PopularMovieScreen'>;
  route: RouteProp<RootStackParamList, 'PopularMovieScreen'>;
};
export type MovieDetailsScreenNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MovieDetailsScreen'>;
  route: RouteProp<RootStackParamList, 'MovieDetailsScreen'>;
};
