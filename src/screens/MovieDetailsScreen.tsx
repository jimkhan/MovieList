import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {MovieDetailsScreenNavigationProps} from 'types';

const MovieDetailsScreen = ({
  navigation,
}: MovieDetailsScreenNavigationProps) => {
  navigation.navigate('MovieDetailsScreen');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>MovieDetailsScreen</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {},
});

export default MovieDetailsScreen;
