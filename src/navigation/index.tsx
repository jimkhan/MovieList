import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './stackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
