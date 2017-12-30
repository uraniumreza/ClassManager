/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Login || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';

import { View, Image, AsyncStorage } from 'react-native';
import Spinner from 'react-native-spinkit';
import { NavigationActions } from 'react-navigation';

import Styles from './Styles';

export default class Logout extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.removeUser();
  }

  async removeUser() {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.log(error);
    }

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });

    setTimeout(() => {
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={Styles.imageViewLogout}>
          <Image style={Styles.image} source={require('../../../assets/icons/icon.png')} />
        </View>
        <View style={Styles.containerLogout}>
          <Spinner isVisible size={60} type="ThreeBounce" color="#0fc9ff" />
        </View>
      </View>
    );
  }
}
