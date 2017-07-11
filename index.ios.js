import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PostList from './src/components/PostList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Posts'} />
    <PostList />
  </View>
);

AppRegistry.registerComponent('RNSimpleCRUD', () => App);
