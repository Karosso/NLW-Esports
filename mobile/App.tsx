import React from 'react';
import { StatusBar } from 'react-native';
import { Backgound } from './src/components/background/Background';
import Home from './src/screens/home/Home';

const App = () => {
  return (
    <Backgound>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Backgound>
  );
};

export default App;
