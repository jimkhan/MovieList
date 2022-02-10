import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from 'types';
import {MovieDetailsScreen} from '@screens';
import BottomTabNavigator from '../bottomTabNavigator';
import {Colors} from '@config';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          title: 'Details',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
