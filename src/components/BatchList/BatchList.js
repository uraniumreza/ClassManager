/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Batch List || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Header from '../Header/Header';
import Styles from './Styles';

export default class BatchList extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ position: 'relative', flex: 1, backgroundColor: '#FFF' }}>
        <Header headerText="BATCH LIST" navigation={this.props.navigation} />
        <View style={Styles.rowSetStyle}>
          <TouchableOpacity onPress={() => console.log('Batch List!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/batchList.png')}
              />
              <Text style={Styles.textStyle}>Batch List</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('My Schedule!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/schedule.png')}
              />
              <Text style={Styles.textStyle}>My Schedule</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.rowSetStyle}>
          <TouchableOpacity onPress={() => console.log('Attendence!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/attendence.png')}
              />
              <Text style={Styles.textStyle}>Attendence</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Payment!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/payment.png')}
              />
              <Text style={Styles.textStyle}>Payment</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.rowSetStyle}>
          <TouchableOpacity onPress={() => console.log('Statistics!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/statistics.png')}
              />
              <Text style={Styles.textStyle}>Statistics</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Log Out!')}>
            <View style={Styles.contentSetStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../assets/icons/logout.png')}
              />
              <Text style={Styles.textStyle}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
