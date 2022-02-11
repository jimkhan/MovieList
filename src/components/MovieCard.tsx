import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import {AppText} from '@common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontFamily, FontSize} from '@config';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'types';
import {ProgressCircle} from '@components';

type MovieCardProps = {
  title?: string;
  release_date?: string;
  poster_path?: string;
  userScore?: number;
  detailsData?: object;
} & TouchableOpacityProps;

const MovieCard = ({
  title,
  release_date,
  poster_path,
  detailsData,
}: MovieCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const posterUri = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('MovieDetailsScreen', {
          detailsData,
        })
      }
      style={styles.container}>
      <Image source={{uri: posterUri}} style={styles.imageStyle} />
      <View style={styles.progressArea}>
        <ProgressCircle
          progressTextStyle={styles.progressText}
          progress={detailsData.vote_average / 10}
        />
      </View>
      <View style={styles.textArea}>
        <AppText style={styles.titleStyle} numberOfLines={4}>
          {title}
        </AppText>
        <AppText style={styles.dateText}>{release_date}</AppText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: hp(35),
    width: wp(40),
    borderRadius: hp(1),
    backgroundColor: Colors.white,
    alignItems: 'center',
    elevation: 2,
    marginHorizontal: wp(3),
    marginBottom: hp(2.5),
  },
  pro: {
    fontSize: FontSize.ES - 3,
    fontWeight: '600',
  },

  textArea: {
    marginBottom: hp(1),
    paddingHorizontal: wp(3),
    alignSelf: 'flex-start',
  },
  progressText: {
    fontSize: FontSize.ES - 5,
    fontWeight: '700',
    color: Colors.white,
  },
  progressArea: {
    top: -hp(1.7),
    left: -hp(6),
  },
  imageStyle: {
    width: wp(40),
    height: hp(25),
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
  },
  dateText: {
    marginTop: hp(0.2),
    fontFamily: FontFamily.SourceSansL,
    color: Colors.darkGray,
  },
});

export default MovieCard;
