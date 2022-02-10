import React, {ReactNode} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type backgroundProps = {
  children?: ReactNode;
  title?: string;
  scrollStyle?: any;
  scrollEnabled?: boolean;
} & ScrollViewProps;
const CommonBackground: React.FC<backgroundProps> = ({
  children,
  scrollStyle,
  scrollEnabled = true,
  ...otherProps
}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        contentContainerStyle={[styles.continer, scrollStyle]}
        {...otherProps}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: theme.light4,
  },
  continer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
  },
});

export default CommonBackground;
