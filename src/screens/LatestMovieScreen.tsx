import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {LetestMovieScreenNavigationProps} from 'types';
import {MovieCard} from '@components';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '@common';
import {addLatestList} from '../feature/movie/letestMovieList';
import {latest} from '../api/movie';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LatestMovieScreen = ({}: LetestMovieScreenNavigationProps) => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const {isLoading, movieList} = useSelector(state => state.latest);

  const callLatestMovieList = async () => {
    setPageNumber(pageNumber + 1);

    const responce = await latest(pageNumber);
    if (responce.ok) {
      await dispatch(addLatestList(responce.data.results));
    }
  };

  useEffect(() => {
    callLatestMovieList();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && <Loader />}
      <FlatList
        data={movieList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={({item}) => item}
        onEndReached={() => {
          callLatestMovieList();
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <MovieCard
              key={item.id}
              title={item.original_title}
              release_date={item.release_date}
              poster_path={item.poster_path}
              detailsData={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(2),
  },
});

export default LatestMovieScreen;
