import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Values, Transitions, Menu } from '../screenConfig';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Menu} name="Menu" options={{ headerShown: false }} />
      <Stack.Screen component={Values} name="Values" />
      <Stack.Screen component={Transitions} name="Transitions" />
    </Stack.Navigator>
  );
};

export { MainNavigator };
