import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class showPostDetail extends Component {
  state = { title: '', body: '', id: '' };

  componentWillMount() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.props.id}`;

    axios.get(url)
      .then(response => this.setState({
        title: response.data.title.toUpperCase(),
        body: response.data.body,
        id: response.data.id
      }));
  }

  onEditPressButton() {
    Actions.createForm();
  }

  onDeletePressButton() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.props.id}`;

    axios.delete(url).then(response => this.checkResponse(response))
      .catch(error => console.log(error));
  }

  checkResponse(response) {
    if (response.status === 200) {
      console.log(response);

      Alert.alert('Succeed', 'Post deleted', [{
        text: 'OK',
      }], { cancelable: false });
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>{this.state.title}</Text>
        </CardSection>

        <CardSection>
          <Text>{this.state.body}</Text>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onEditPressButton.bind(this)}
            text={'Edit'}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onDeletePressButton.bind(this)}
            text={'Delete'}
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

export default showPostDetail;
