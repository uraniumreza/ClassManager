/**
 * Mobile Application For duMedico(Patient)
 * Product Developed By: Dubin Labs Ltd.
 * StyleSheet for SideMenu || Author: Nayeem Reza
 * https://github.com/mostafiz93/DuMedi
 */

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
  },
  navItemStyle: {
    paddingTop: 18,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTextStyle: {
    paddingLeft: 20,
    fontSize: 18,
  },
  navIconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    opacity: 0.6,
  },
  navSectionStyle: {},
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerImageStyle: {
    flex: 1,
    width: width * 0.7,
    height: width * 0.46,
    opacity: 0.9,
  },
  headerText: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: '#FFF',
    fontSize: 19,
  },
  horizontalLine: {
    width: width * 0.7,
    borderWidth: 0.2,
    opacity: 0.2,
    marginTop: 18,
  },
};
