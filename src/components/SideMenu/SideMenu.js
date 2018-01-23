/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * SideMenu || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import Styles from './Styles';

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.headerContainer}>
            <Image
              style={Styles.headerImageStyle}
              source={require('../../../assets/images/cover-photo.jpg')}
            />
          </View>
          <View>
            <View style={Styles.navSectionStyle}>
              <TouchableOpacity onPress={this.navigateToScreen('BatchList')}>
                <View style={Styles.navItemStyle}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../../assets/icons/batchList.png')}
                  />
                  <Text style={Styles.navTextStyle}>Batch List</Text>
                </View>
              </TouchableOpacity>

              <View style={Styles.horizontalLine} />

              <TouchableOpacity onPress={this.navigateToScreen('Appointments')}>
                <View style={[Styles.navItemStyle, { paddingTop: 15 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../../assets/icons/schedule.png')}
                  />
                  <Text style={Styles.navTextStyle}>My Schedule</Text>
                </View>
              </TouchableOpacity>

              <View style={Styles.horizontalLine} />

              <TouchableOpacity onPress={this.navigateToScreen('MyProfile')}>
                <View style={[Styles.navItemStyle, { paddingTop: 15 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../../assets/icons/statistics.png')}
                  />
                  <Text style={Styles.navTextStyle}>Statistics</Text>
                </View>
              </TouchableOpacity>

              <View style={Styles.horizontalLine} />

              <TouchableOpacity onPress={this.navigateToScreen('Logout')}>
                <View style={[Styles.navItemStyle, { paddingTop: 15 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../../assets/icons/logout.png')}
                  />
                  <Text style={Styles.navTextStyle}>Sign Out</Text>
                </View>
              </TouchableOpacity>

              <View style={Styles.horizontalLine} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SideMenu;
