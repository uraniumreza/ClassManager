/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Batch List || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Fab, Button } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../Header/Header';
import Styles from './Styles';
import AddNewBatch from './AddNewBatch';

export default class BatchList extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  toggleModalVisibility() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { modalVisible } = this.state;

    return (
      <View style={{ position: 'relative', flex: 1, backgroundColor: '#FFF' }}>
        <Header headerText="Batch List" navigation={this.props.navigation} />
        <AddNewBatch visible={modalVisible} toggleModalVisibility={this.toggleModalVisibility} />
        <Fab
          style={{ backgroundColor: '#0fc9ff' }}
          position="bottomRight"
          onPress={this.toggleModalVisibility}
        >
          <Entypo size={25} name="plus" />
        </Fab>
      </View>
    );
  }
}
