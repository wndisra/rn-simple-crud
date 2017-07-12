import React, { Component } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import Input from './Input';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class EditForm extends Component {
  state = { title: '', body: '' };

  onButtonPress() {
    const { title, body } = this.state;

    const data = {
      title,
      body,
      userId: 1
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    if (this.checkInput(title, body)) {
      this.renderAlert('Succeed', 'Fake post created');
    } else {
      this.renderAlert('Failed', 'Fake post not created');
    }
  }

  checkInput(title, body) {
    let successInput = false;

    if (title !== '' && body !== '') {
      successInput = true;
    }

    return successInput;
  }

  renderAlert(text, message) {
    Alert.alert(text, message, [{
      text: 'OK',
    }], { cancelable: false });
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

export default EditForm;
