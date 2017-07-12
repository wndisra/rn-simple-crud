import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import PostDetail from './PostDetail';
import Button from './Button';

class PostList extends Component {
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({ posts: response.data }));
  }

  onPressButton() {
    return Actions.createForm;
  }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostDetail key={post.id} post={post} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Button
          onPress={this.onPressButton()}
          text={'Create'}
        />

        {this.renderPosts()}
      </ScrollView>
    );
  }
}

export default PostList;
