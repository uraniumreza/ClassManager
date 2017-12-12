/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * Log In || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import React, { Component } from 'react';
import { Text, View, Image, Modal, AsyncStorage } from 'react-native';

import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
// import Meteor from 'react-native-meteor';
import SnackBar from 'react-native-snackbar-component';
import { Container, Content, Form, Item, Input, Button } from 'native-base';

import Styles from './Styles';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      // signInPressed: false,
      contactNo: null,
      password: null,
      registerModalVisible: false,
      registerFullName: null,
      registerContactNo: null,
      registerPassword: null,
      registerRePassword: null,
      visibleSnackBar1: false,
    };
  }

  componentWillMount() {}

  componentWillUnmount() {}

  async saveUser(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  handleLogin() {
    console.log('--------- HANDLE LOGIN ---------');
    // this.props.navigation.navigate('HomePage');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomePage' })],
    });

    this.props.navigation.dispatch(resetAction);

    // this.setState({ signInPressed: true });
    // Meteor.loginWithPassword(this.state.contactNo, this.state.password, (err) => {
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

  handleForgotPassword() {
    console.log('Forgot Password Text Pressed!');
  }

  handleCreateAccount() {
    // console.log('Create Account Button Pressed!');

    this.setState({ registerModalVisible: !this.state.registerModalVisible });
  }

  handleRegister() {
    // console.log('Register Button Pressed');

    const PhoneNumberPattern = /01\d{9}$/;

    if (
      this.state.registerFullName === null ||
      this.state.registerContactNo === null ||
      this.state.registerPassword === null ||
      this.state.registerRePassword === null
    ) {
      if (this.state.registerFullName === null) {
        alert('Error! Your Name is Required!');
        return;
      } else if (this.state.registerContactNo === null) {
        alert('Error! Contact Number is Required!');
        return;
      } else if (this.state.registerPassword === null) {
        alert('Error! Password is Required!');
        return;
      } else if (this.state.registerRePassword === null) {
        alert('Error! Retype Password is Required!');
        return;
      }
    } else if (this.state.registerRePassword !== this.state.registerPassword) {
      alert("Error! Passwords don't match!");
      return;
    } else if (!PhoneNumberPattern.test(this.state.registerContactNo)) {
      alert('Your Contact No. is not valid!');
      return;
    }

    this.setState({ registerModalVisible: !this.state.registerModalVisible });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#F0F5F6' }}>
        <SnackBar
          visible={this.state.visibleSnackBar1}
          textMessage="Sorry, Contact Number and Password Did'nt Match!"
          actionHandler={() => {
            this.setState({ visibleSnackBar1: true });
          }}
          actionText="Okay"
        />
        <Content>
          <View style={{ marginTop: 30 }} />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.registerModalVisible}
            onRequestClose={() => {
              this.setState({ registerModalVisible: !this.state.registerModalVisible });
            }}
          >
            <Container style={{ backgroundColor: '#F0F5F6' }}>
              <Content>
                <View style={{ marginTop: 30 }} />
                <View style={Styles.imageView}>
                  <Image style={Styles.image} source={require('../../icons/logo.png')} />
                </View>

                <Form>
                  <Item regular style={Styles.item}>
                    <Input
                      placeholderTextColor="#B6B2B2"
                      placeholder="Full Name"
                      onChangeText={registerFullName => this.setState({ registerFullName })}
                    />
                  </Item>
                  <View style={{ marginTop: 10 }} />
                  <Item regular style={Styles.item}>
                    <Input
                      placeholderTextColor="#B6B2B2"
                      placeholder="Contact No"
                      keyboardType="numeric"
                      onChangeText={registerContactNo => this.setState({ registerContactNo })}
                    />
                  </Item>
                  <View style={{ marginTop: 10 }} />
                  <Item regular style={Styles.item}>
                    <Input
                      placeholderTextColor="#B6B2B2"
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={registerPassword => this.setState({ registerPassword })}
                    />
                  </Item>
                  <View style={{ marginTop: 10 }} />
                  <Item regular style={Styles.item}>
                    <Input
                      placeholderTextColor="#B6B2B2"
                      placeholder="Retype Password"
                      secureTextEntry
                      onChangeText={registerRePassword => this.setState({ registerRePassword })}
                    />
                  </Item>

                  <View style={{ marginTop: 20 }} />

                  <Button style={Styles.button} block info onPress={this.handleRegister.bind(this)}>
                    <Text style={Styles.buttonText}>REGISTER</Text>
                  </Button>

                  <View style={{ marginTop: 20 }} />
                </Form>
              </Content>
            </Container>
          </Modal>

          <View style={Styles.imageView}>
            <Image style={Styles.image} source={require('../../icons/logo.png')} />
          </View>

          <Form>
            <Item regular style={Styles.item}>
              <Input
                keyboardType="numeric"
                placeholderTextColor="#B6B2B2"
                placeholder="Contact No"
                onChangeText={contactNo => this.setState({ contactNo })}
              />
            </Item>
            <View style={{ marginTop: 10 }} />
            <Item regular style={Styles.item}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="Password"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>

          <View style={{ marginTop: 20 }} />

          <Button style={Styles.button} block info onPress={this.handleLogin.bind(this)}>
            <Text style={Styles.buttonText}>SIGN IN</Text>
          </Button>

          <Text style={Styles.textFP} onPress={this.handleForgotPassword.bind(this)}>
            Forgot Password?
          </Text>

          <View style={Styles.orView}>
            <View style={Styles.leftLine} />
            <Text style={Styles.textOr}>Or</Text>
            <View style={Styles.rightLine} />
          </View>

          <View style={{ marginTop: 10 }} />

          <Button style={Styles.button} block info onPress={this.handleCreateAccount.bind(this)}>
            <Text style={Styles.buttonText}>CREATE ACCOUNT</Text>
          </Button>

          <View style={{ marginTop: 35 }} />
        </Content>
      </Container>
    );
  }
}

LogIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};
