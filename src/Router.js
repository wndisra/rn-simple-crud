import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PostList from './components/PostList';
import CreateForm from './components/CreateForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene
        key="postList"
        component={PostList}
        title={'Posts'}
      />

      <Scene
        key="createForm"
        component={CreateForm}
        title={'Create Post'}
      />
    </Router>
  );
};

export default RouterComponent;
