/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Header Component || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const Header = props => (
  <View style={Styles.viewStyle}>
    <Text style={Styles.textStyle}>{props.headerText}</Text>
  </View>
);

export default Header;
