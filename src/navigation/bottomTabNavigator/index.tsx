import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LatestMovieScreen, PopularMovieScreen} from '@screens';
import {RootStackParamList} from 'types';
import {Colors} from '@config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LetestMovieScreen"
        component={LatestMovieScreen}
        options={{
          title: 'Letest',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="whatshot" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PopularMovieScreen"
        component={PopularMovieScreen}
        options={{
          title: 'Popular',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color}) => (
            <Ionicons name="globe-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
