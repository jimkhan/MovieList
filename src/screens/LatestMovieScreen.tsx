import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
// import {LetestMovieScreenNavigationProps} from '../../types';
import {LetestMovieScreenNavigationProps} from 'types';
import {MovieCard} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
const LatestMovieScreen = ({}: LetestMovieScreenNavigationProps) => {
  // navigation.navigate('MovieDetailsScreen');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MovieCard />
      <Icon name="home" size={30} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default LatestMovieScreen;
