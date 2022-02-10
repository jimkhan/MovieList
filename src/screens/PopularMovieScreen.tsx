import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {MovieCard} from '@components';

const PopularMovieScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MovieCard />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default PopularMovieScreen;
