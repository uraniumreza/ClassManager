/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Login || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage, ToastAndroid } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import Spinner from 'react-native-spinkit';
import firebase from 'firebase';
import Styles from './Styles';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      signInPressed: false,
      email: 'email@gmail.com',
      password: 'password',
    };

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].wrappedInstance.focus();
  }

  async saveUser(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  handleLogin() {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.setState({ signInPressed: true });

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'BatchList' })],
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => this.props.navigation.dispatch(resetAction), 500);
        this.saveUser(user);
        ToastAndroid.show('Welcome to Math Circle Class Management System!', ToastAndroid.SHORT);
      })
      .catch(() => {
        this.setState({ signInPressed: false });
        ToastAndroid.show('Wrong Email or Password!', ToastAndroid.SHORT);
      });
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}
      >
        <Content>
          <View style={Styles.imageView}>
            <Image style={Styles.image} source={require('../../../assets/icons/icon.png')} />
          </View>

          <Form>
            <Item regular style={Styles.item}>
              <Input
                keyboardType="email-address"
                placeholderTextColor="#B6B2B2"
                placeholder="email@gmail.com"
                onChangeText={email => this.setState({ email })}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.focusNextField('two');
                }}
                returnKeyType="next"
                ref={(input) => {
                  this.inputs['one'] = input;
                }}
              />
            </Item>
            <View style={{ marginTop: 15 }} />
            <Item regular style={Styles.item}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="password"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                blurOnSubmit
                onSubmitEditing={this.handleLogin.bind(this)}
                returnKeyType="done"
                ref={(input) => {
                  this.inputs['two'] = input;
                }}
              />
            </Item>
          </Form>

          <View style={{ marginTop: 30 }} />
          {!this.state.signInPressed && (
            <Button style={Styles.button} block info onPress={this.handleLogin.bind(this)}>
              <Text style={Styles.buttonText}>SIGN IN</Text>
            </Button>
          )}

          {this.state.signInPressed && (
            <View style={Styles.container}>
              <Spinner isVisible size={60} type="ThreeBounce" color="#0fc9ff" />
            </View>
          )}

          <View style={{ marginTop: 35 }} />
        </Content>
      </Container>
    );
  }
}
