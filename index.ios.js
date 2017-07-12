import React from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/Router';

const App = () => (
  <Router />
);

AppRegistry.registerComponent('RNSimpleCRUD', () => App);
