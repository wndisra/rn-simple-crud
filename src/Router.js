import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PostList from './components/PostList';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import showPostDetail from './components/ShowPostDetail';

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

      <Scene
        key="editForm"
        component={EditForm}
        title={'Edit Post'}
      />

      <Scene
        key="showPostDetail"
        component={showPostDetail}
        title={'Detail Post'}
      />
    </Router>
  );
};

export default RouterComponent;
