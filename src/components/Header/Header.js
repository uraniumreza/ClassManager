/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * Header Component || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const Header = props => (
  <View style={Styles.viewStyle}>
    <TouchableOpacity style={Styles.menuButton}>
      <Icon
        onPress={() => props.navigation.navigate('DrawerOpen')}
        name="md-menu"
        size={25}
        color="white"
        align="right"
      />
    </TouchableOpacity>

    <Text style={Styles.textStyle}>{props.headerText}</Text>

    <TouchableOpacity style={Styles.notificationButton}>
      <Icon name="md-notifications" size={25} color="white" align="right" />
    </TouchableOpacity>
  </View>
);

export default Header;
