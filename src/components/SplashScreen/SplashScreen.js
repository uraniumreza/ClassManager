/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * Splash Screen || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';

// import Meteor from 'react-native-meteor';

import Styles from './Styles';

// const SERVER_URL = 'ws://durbintest.pro/websocket';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    // Meteor.connect(SERVER_URL);
  }

  componentDidMount() {
    // console.log('Mounted!', this);
    this.checkUserSignedIn();
  }

  async checkUserSignedIn() {
    const context = this;
    try {
      console.log('checking signin status...');
      const value = await AsyncStorage.getItem('user');
      console.log(value);
      const jsonParsedValue = JSON.parse(value);

      if (value != null) {
        console.log(jsonParsedValue);

        context.props.navigation.navigate('HomePage', {
          user: JSON.parse(value),
        });
      } else {
        console.log('Log In ---> ');
        context.props.navigation.navigate('Login');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error: ', error);
    }
    console.log('Checked!');
  }

  render() {
    return <Image style={Styles.imageStyle} source={require('../../images/SplashScreen.png')} />;
  }
}
