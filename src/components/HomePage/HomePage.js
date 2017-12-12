/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * Home Page || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

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
      <View style={{ position: 'relative', flex: 1, backgroundColor: '#F0F5F6' }}>
        <Header headerText="HOME" navigation={this.props.navigation} />
        <View style={Styles.cardStyle}>
          <View style={Styles.verticalLine} />
          <View style={Styles.horizontalLine1} />
          <View style={Styles.horizontalLine2} />
          <View style={Styles.rowSetStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Appointments')}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/Appointments.png')}
                />
                <Text style={Styles.textStyle}>APPOINTMENTS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Prescription')}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/Prescription.png')}
                />
                <Text style={Styles.textStyle}>PRESCRIPTIONS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={Styles.rowSetStyle}>
            <TouchableOpacity onPress={() => console.log('Medicine Reminder!')}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/MedicineReminder.png')}
                />
                <Text style={Styles.textStyle}>MEDICINE REMINDER</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Doctor's Location!")}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/DoctorsLocation.png')}
                />
                <Text style={Styles.textStyle}>DOCTOR&apos;S LOCATION</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={Styles.rowSetStyle}>
            <TouchableOpacity onPress={() => console.log('Telemedecine!')}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/Telemedicine.png')}
                />
                <Text style={Styles.textStyle}>TELE MEDICINE</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Doctors Profile')}>
              <View style={Styles.contentSetStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../../icons/Homepage/MyProfile.png')}
                />
                <Text style={Styles.textStyle}>DOCTOR&apos;S PROFILE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5 }} />
        </View>
      </View>
    );
  }
}
