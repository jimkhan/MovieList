import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Image, View, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MovieDetailsScreenNavigationProps} from 'types';
import {AppText} from '@common';
import {FontSize, Colors, FontFamily} from '@config';
import {getDetailsByMovieId} from '../api/movie';
import {ProgressCircle} from '@components';
import {MovieDetails} from '@dataType';

const MovieDetailsScreen = ({route}: MovieDetailsScreenNavigationProps) => {
  const detailsData = route.params.detailsData;

  const posterUri = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailsData.poster_path}`;
  const backCoverImage = `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${detailsData.backdrop_path}`;

  const [details, setDetails] = useState<MovieDetails>();

  const callMoviedetaisById = async () => {
    const responce = await getDetailsByMovieId(detailsData?.id);
    if (responce.ok) {
      console.log('res', responce.data);
      setDetails(responce.data);
    } else {
      console.log(responce);
    }
  };

  useEffect(() => {
    callMoviedetaisById();
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image
          source={{uri: backCoverImage}}
          style={styles.backcoverImsgeStyle}
        />
        <Image source={{uri: posterUri}} style={styles.posterImsgeStyle} />
        <AppText style={styles.tiletext}>
          {details?.title} ({details?.release_date.slice(0, 4)})
        </AppText>
        <View style={styles.genericInfo}>
          <AppText style={styles.text}>
            {details && details?.release_date}
            {'   .  '}
          </AppText>
          {details &&
            details.genres.map((item, index) => {
              return (
                <AppText style={styles.text}>
                  {item.name}
                  {details.genres.length - 1 == index ? '' : ', '}
                </AppText>
              );
            })}
        </View>
        <AppText style={styles.text}>
          {details && Math.round(details.runtime / 60)}
          {'h  '}
          {details && Math.floor(details.runtime) % 60}
          {'m'}
        </AppText>
        <View style={styles.userScoreArea}>
          <ProgressCircle
            size={16}
            progress={details && details.vote_average / 10}
            progressTextStyle={styles.progressTextStyle}
          />
          <AppText style={styles.userScoreText}>User Score</AppText>
        </View>
        <View style={styles.detailsTextArea}>
          <AppText style={styles.tagLine}>{details && details.tagline}</AppText>
          <AppText style={styles.overviewStyle}>Overview</AppText>
          <AppText style={styles.overviewDetails}>
            {details && details.overview}
          </AppText>
          <AppText style={styles.productionText}>Production Companies</AppText>
          {details &&
            details.production_companies.map(item => (
              <AppText style={styles.text}>
                {item.name}
                {', '}
                {item.origin_country}
              </AppText>
            ))}
          <AppText style={styles.productionText}>Production Countries</AppText>
          {details &&
            details.production_countries.map(item => (
              <AppText style={styles.text}>{item.name}</AppText>
            ))}
          <AppText style={styles.productionText}>Spoken Languages</AppText>
          {details &&
            details.spoken_languages.map(item => (
              <AppText style={styles.text}>{item.english_name}</AppText>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  productionText: {
    color: Colors.white,
    fontSize: FontSize.M,
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
  detailsTextArea: {
    width: wp(90),
    alignItems: 'center',
  },
  overviewStyle: {
    color: Colors.white,
    fontSize: FontSize.XXL,
    marginTop: hp(3),
  },
  overviewDetails: {
    color: Colors.white,
    fontFamily: FontFamily.SourceSansL,
    fontSize: FontSize.S,
    textAlign: 'center',
    marginTop: hp(1),
  },
  tagLine: {
    color: Colors.white,
    fontSize: FontSize.XL,
    textAlign: 'center',
  },
  userScoreText: {
    fontSize: FontSize.L,
    marginTop: hp(0.4),
    color: Colors.white,
  },
  userScoreArea: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
  progressTextStyle: {
    fontSize: FontSize.L - 2,
    fontWeight: 'bold',
    color: Colors.white,
  },
  genericInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(90),
    marginTop: hp(1),
  },
  backcoverImsgeContainer: {},
  tiletext: {
    width: wp(90),
    color: Colors.white,
    fontSize: FontSize.XXL,
    textAlign: 'center',
  },
  backcoverImsgeStyle: {
    width: wp(100),
    height: hp(30),
    marginBottom: hp(13),
    opacity: 1,
  },
  posterImsgeStyle: {
    position: 'absolute',
    width: wp(35),
    height: hp(25),
    borderRadius: hp(1),
    zIndex: 333,
    top: hp(15),
  },
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: FontFamily.SourceSansL,
  },
});

export default MovieDetailsScreen;
