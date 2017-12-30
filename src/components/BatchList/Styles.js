/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * StyleSheet for Batch List || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const blockHeight = (height - 80) / 3;
const blockWidth = width / 2;

export default StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  rowSetStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentSetStyle: {
    height: blockHeight,
    width: blockWidth,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    marginTop: 12,
    fontSize: 18,
    color: '#464646',
    fontFamily: 'Roboto_medium',
  },
});
