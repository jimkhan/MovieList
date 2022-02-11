import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, FontSize} from '@config';
import * as Progress from 'react-native-progress';
import {RFValue} from 'react-native-responsive-fontsize';

const ProgressCircle = ({size = 9, progress = 0.5, progressTextStyle}) => {
  return (
    <View
      style={[
        styles.progressArea,
        {width: wp(size + 1), height: wp(size + 1)},
      ]}>
      <Progress.Circle
        size={wp(size)}
        progress={progress}
        showsText={true}
        animated={false}
        allowFontScaling
        textStyle={progressTextStyle}
        color={Colors.Closed}
        thickness={RFValue((2 / 9) * size)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressText: {
    fontSize: FontSize.ES - 3,
    fontWeight: '600',
  },
  progressArea: {
    zIndex: 1,
    borderRadius: wp(5),
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressCircle;
