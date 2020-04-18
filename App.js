/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigations/MainNavigator/MainNavigator';
import { enableScreens, useScreens } from 'react-native-screens';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>{MainNavigator()}</NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
