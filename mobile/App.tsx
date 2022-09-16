import React from 'react';
import { StatusBar } from 'react-native';
import { Backgound } from './src/components/background/Background';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <Backgound>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Backgound>
  );
};

export default App;
