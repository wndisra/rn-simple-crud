import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import axios from 'axios';
import Input from './Input';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class CreateForm extends Component {
  state = { title: '', body: '', error: '' };

  onButtonPress() {
    const { title, body } = this.state;

    const data = {
      title,
      body,
      userId: 1
    };

    axios.post('http://jsonplaceholder.typicode.com/posts', data)
      .then(response => this.onAxiosSuccess(response, data))
      .catch(error => this.onAxiosFail(error));
  }

  onAxiosSuccess(response, data) {
    if (JSON.stringify(response) === JSON.stringify(data)) {
      Alert.alert('Succeed', 'Fake post created', [{
        text: 'OK', onPress: () => console.log('OK Pressed')
      }], { cancelable: false });
    } else {
      this.onAxiosFail();
    }
  }

  onAxiosFail(error) {
    if (error) {
      Alert.alert('Failed', 'Fake post not created', [{
        text: 'OK', onPress: () => console.log('OK Pressed')
      }], { cancelable: false });
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Input new title"
            label="Title"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Input new body"
            label="Body"
            value={this.state.body}
            onChangeText={body => this.setState({ body })}
          />
        </CardSection>

        <Text>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            text={'Save'}
          />
        </CardSection>
      </Card>
    );
  }
}

export default CreateForm;
