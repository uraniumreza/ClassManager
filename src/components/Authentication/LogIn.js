/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Login || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { Text, View, Image, Modal, AsyncStorage } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import Spinner from 'react-native-spinkit';
import Styles from './Styles';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      signInPressed: false,
      email: null,
      password: null,
    };
  }

  componentWillMount() {}

  componentWillUnmount() {}

  async saveUser(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  handleLogin() {
    console.log('--------- HANDLE LOGIN ---------');
    this.setState({ signInPressed: true });
    // this.props.navigation.navigate('HomePage');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomePage' })],
    });

    setTimeout(() => this.props.navigation.dispatch(resetAction), 1500);

    // this.setState({ signInPressed: true });
    // Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
    //   console.log(err, res);
    //   console.log(Meteor.user());
    //   if (err) {
    //     this.setState({ visibleSnackBar1: true });
    //     ToastAndroid.show("Sorry, Contact Number and Password Did'nt Match!", ToastAndroid.SHORT);
    //     this.setState({ signInPressed: false });
    //   } else {
    //     const usr = AsyncStorage.getItem('user');
    //     ToastAndroid.show(`Welcome ${usr.profile.name}`, ToastAndroid.SHORT);
    //     this.saveUser(usr);
    //     this.props.navigation.navigate('HomePage', {
    //       user: usr,
    //     });
    //   }
    // });
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
            <Image style={Styles.image} source={require('../../icons/icon.png')} />
          </View>

          <Form>
            <Item regular style={Styles.item}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="Email Address"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <View style={{ marginTop: 15 }} />
            <Item regular style={Styles.item}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="Password"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
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
              <Spinner isVisible size={100} type="ThreeBounce" color="#0fc9ff" />
            </View>
          )}

          <View style={{ marginTop: 35 }} />
        </Content>
      </Container>
    );
  }
}
