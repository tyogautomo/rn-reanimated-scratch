import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Values } from '../screenConfig';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Values} name="Values" />
    </Drawer.Navigator>
  );
};

export { MainNavigator };
