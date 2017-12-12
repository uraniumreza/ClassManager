/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * StyleSheet for Authentication || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: width * 0.9,
    height: 50,
    marginLeft: width * 0.05,
    borderRadius: 6,
    backgroundColor: '#0fc9ff',
  },
  item: {
    width: width * 0.9,
    marginLeft: width * 0.05,
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: '#0fc9ff',
    borderBottomWidth: 0.7,
    shadowOffset: { width: 2, height: 0 },
    shadowColor: '#F0F5F6',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#FFF',
  },
  leftLine: {
    borderWidth: 0.5,
    width: width * 0.4,
    borderColor: '#0fc9ff',
  },
  rightLine: {
    borderWidth: 0.5,
    width: width * 0.4,
    borderColor: '#0fc9ff',
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
