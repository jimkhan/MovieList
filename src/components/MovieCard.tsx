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
  date?: string;
  coverImage?: string;
  userScore?: number;
  detailsData?: object;
} & TouchableOpacityProps;

const MovieCard = ({}: MovieCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetailsScreen')}
      style={styles.container}>
      <Image source={require('@img/images.jpeg')} style={styles.imageStyle} />
      <View style={styles.progressArea}>
        <ProgressCircle />
      </View>
      <View style={styles.textArea}>
        <AppText numberOfLines={4}>Spider Man - No Way Home</AppText>
        <AppText style={styles.dateText}>Oct 25, 1992</AppText>
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
  },
  textArea: {
    marginBottom: hp(1),
    paddingHorizontal: wp(2),
  },
  progressText: {
    fontSize: FontSize.ES - 1,
    fontFamily: FontFamily.SourceSansB,
    color: Colors.white,
  },
  progressArea: {
    top: -hp(1.7),
    left: -hp(6),
  },
  imageStyle: {
    width: wp(40),
    height: hp(25),
    borderRadius: hp(1),
  },
  dateText: {
    marginTop: hp(0.2),
    fontFamily: FontFamily.SourceSansL,
    color: Colors.darkGray,
  },
});

export default MovieCard;
