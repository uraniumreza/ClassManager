/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * StyleSheet for HomePage || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

blockHeight = height * 0.5;
blockWidth = width * 0.9;

export default StyleSheet.create({
  topCardView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 1,
  },
  cardStyle: {
    width: width * 0.9,
    height: height * 0.85,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: -(height * 0.05),
    marginLeft: width * 0.05,
  },
  imageStyle: {
    flex: 1,
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  rowSetStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    marginBottom: 30,
  },
  contentSetStyle: {
    height: blockHeight / 3,
    width: blockWidth / 2,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textStyle: {
    marginTop: 5,
    fontSize: 15,
    color: '#808185',
    fontFamily: 'Roboto',
  },
  verticalLine: {
    borderWidth: 0.3,
    width: 0,
    height,
    borderColor: '#DBD9D9',
    marginLeft: width * 0.45,
    elevation: 0.1,
    position: 'absolute',
  },
  horizontalLine1: {
    borderWidth: 0.3,
    width,
    borderColor: '#DBD9D9',
    elevation: 0.2,
    position: 'absolute',
    top: height / 3.5,
  },
  horizontalLine2: {
    borderWidth: 0.3,
    width,
    borderColor: '#DBD9D9',
    elevation: 0.2,
    position: 'absolute',
    bottom: height / 3.5,
  },
});
