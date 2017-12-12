/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Splash Screen || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import Spinner from 'react-native-spinkit';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

import Styles from './Styles';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCJHuNqauIMq784fDc8quXMH6znTg5N_jQ',
      authDomain: 'classmanager-3fdac.firebaseapp.com',
      databaseURL: 'https://classmanager-3fdac.firebaseio.com',
      projectId: 'classmanager-3fdac',
      storageBucket: 'classmanager-3fdac.appspot.com',
      messagingSenderId: '155614632038',
    };

    firebase.initializeApp(config);
  }

  componentDidMount() {
    // console.log('Mounted!', this);
    this.checkUserSignedIn();
  }

  async checkUserSignedIn() {
    const context = this;
    try {
      // console.log('checking signin status...');
      const value = await AsyncStorage.getItem('user');
      // console.log(value);
      const jsonParsedValue = JSON.parse(value);

      if (value != null) {
        // console.log(jsonParsedValue);

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'HomePage' })],
        });

        setTimeout(() => context.props.navigation.dispatch(resetAction), 3000);
      } else {
        // console.log('Log In ---> ');
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });

        setTimeout(() => context.props.navigation.dispatch(resetAction), 3000);
      }
    } catch (error) {
      // Error retrieving data
      // console.log('Error: ', error);
    }
    // console.log('Checked!');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={Styles.imageView}>
          <Image style={Styles.image} source={require('../../icons/icon.png')} />
        </View>
        <View style={Styles.container}>
          <Spinner isVisible size={100} type="ThreeBounce" color="#0fc9ff" />
        </View>
      </View>
    );
  }
}
