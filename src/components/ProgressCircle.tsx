import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, FontFamily, FontSize} from '@config';
import * as Progress from 'react-native-progress';
import {RFValue} from 'react-native-responsive-fontsize';

const ProgressCircle = ({}) => {
  return (
    <View style={styles.progressArea}>
      <Progress.Circle
        size={wp(9)}
        progress={0.5}
        showsText={true}
        animated={false}
        allowFontScaling
        textStyle={styles.progressText}
        color={Colors.Closed}
        //   borderColor={"#2ECC71"}
        thickness={RFValue(2)}
        //   //   fill={'#1ABC9C'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressText: {
    fontSize: FontSize.ES - 1,
    fontFamily: FontFamily.SourceSansB,
    fontWeight: 'bold',
    color: Colors.white,
  },
  progressArea: {
    zIndex: 1,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressCircle;
