/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * StyleSheet for Header || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0fc9ff',
    height: 55,
    elevation: 0,
    position: 'relative',
  },
  textStyle: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
    color: 'white',
  },
  menuButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
  },
  notificationButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },
});
