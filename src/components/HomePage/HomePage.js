/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Home Page || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../Header/Header';
import Styles from './Styles';

export default class HomePage extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ position: 'relative', flex: 1, backgroundColor: '#FFF' }}>
        <Header headerText="HOME" navigation={this.props.navigation} />
      </View>
    );
  }
}
