/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * StyleSheet for SplashScreen || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
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
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFP: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#0fc9ff',
    textDecorationLine: 'underline',
    fontFamily: 'monospace',
    marginTop: 15,
  },
  textOr: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#0fc9ff',
    fontStyle: 'italic',
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
    borderBottomWidth: 0,
    shadowOffset: { width: 2, height: 0 },
    shadowColor: '#0fc9ff',
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
});
