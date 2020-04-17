/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigations/MainNavigator/MainNavigator';

const App = () => {
  return <NavigationContainer>{MainNavigator()}</NavigationContainer>;
};

export default App;
