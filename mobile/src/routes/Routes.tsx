import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppStack from './app/AppStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
