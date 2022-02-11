import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {MovieCard} from '@components';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '@common';
import {addPopularList} from '../feature/movie/popularMovielist';
import {latest, popular} from '../api/movie';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '@config';
import {MovieData} from '@dataType';
const PopularMovieScreen = () => {
  const dispatch = useDispatch();
  const {isLoading, movieList} = useSelector(state => state.popular);
  const [pageNumber, setPageNumber] = useState(1);

  const callLatestMovieList = async () => {
    setPageNumber(pageNumber + 1);
    console.log('PPPPPPPPP', pageNumber);

    const responce = await popular(pageNumber);
    if (responce.ok) {
      console.log(responce.data.results);
      await dispatch(addPopularList(responce.data.results));
      // console.log('From resux', movieList);
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
        keyExtractor={({item, index}) => index}
        onEndReached={() => {
          callLatestMovieList();
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          // console.log(item, index);

          return (
            <MovieCard
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

// title,
// release_date,
// poster_path,
// detailsData,

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

export default PopularMovieScreen;
