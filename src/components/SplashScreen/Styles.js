/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * StyleSheet for SplashScreen || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.25,
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
