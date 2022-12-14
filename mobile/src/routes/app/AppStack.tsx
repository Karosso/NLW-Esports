import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateAds from '../../screens/ads/CreateAds';
import Game from '../../screens/game/Game';
import Home from '../../screens/home/Home';
import { AppStackTypes } from './AppStack.types';

const AppStack = () => {
  const Stack = createNativeStackNavigator<AppStackTypes>();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="CreateAds" component={CreateAds} />
    </Stack.Navigator>
  );
};

export default AppStack;
