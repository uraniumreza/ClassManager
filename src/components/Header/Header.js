/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Header Component || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

const Header = props => (
  <View style={Styles.viewStyle}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('DrawerOpen')}
      style={Styles.menuButton}
    >
      <IconI name="md-menu" size={25} color="white" align="right" />
    </TouchableOpacity>

    <Text style={Styles.textStyle}>{props.headerText}</Text>

    <TouchableOpacity
      onPress={() => props.navigation.navigate('Notification')}
      style={Styles.notificationButton}
    >
      <IconFA name="ellipsis-v" size={22} color="#FFF" align="right" />
    </TouchableOpacity>
  </View>
);

export default Header;
