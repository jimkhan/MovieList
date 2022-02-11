import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LatestMovieScreen, PopularMovieScreen} from '@screens';
import {RootStackParamList} from 'types';
import {Colors} from '@config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PopularMovieScreen"
        component={PopularMovieScreen}
        options={{
          title: 'Popular',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="globe-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LetestMovieScreen"
        component={LatestMovieScreen}
        options={{
          title: 'Latest',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color, size}) =>
            Platform.OS === 'ios' ? (
              <MaterialIcons
                name={'local-fire-department'}
                color={color}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons name={'fire'} color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
