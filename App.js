import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import HomeScreen from './screen/home/HomeScreen';
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#000" />
      <HomeScreen />
    </Provider>
  );
}
