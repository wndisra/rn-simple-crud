import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class PostDetail extends Component {
  onPressButton() {
    return Actions.showPostDetail({ id: this.props.post.id });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>{this.props.post.title.toUpperCase()}</Text>
        </CardSection>

        <CardSection>
          <Text>{this.props.post.body}</Text>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onPressButton.bind(this)}
            text={'Show'}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontWeight: '500'
  }
};

export default PostDetail;
