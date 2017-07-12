import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const PostDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text style={styles.titleStyle}>{props.post.title.toUpperCase()}</Text>
      </CardSection>

      <CardSection>
        <Text>{props.post.body}</Text>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => console.log('Show Pressed')}
          text={'Show'}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  titleStyle: {
    fontWeight: '500'
  }
};

export default PostDetail;
