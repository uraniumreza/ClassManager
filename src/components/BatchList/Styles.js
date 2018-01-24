/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * StyleSheet for Batch List || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardStyleTop: {
    width,
    height,
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 0,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    marginTop: 20,
  },
  itemHalf: {
    width: (width * 0.9 - 20) / 2,
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
  cardListStyle: {
    width: width - 40,
    backgroundColor: '#FFF',
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: '#0fc9ff',
    borderBottomWidth: 0.7,
    shadowOffset: { width: 2, height: 0 },
    shadowColor: '#F0F5F6',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 20,
    marginTop: 5,
    position: 'relative',
  },
  cardHeader: {
    height: 50,
    // backgroundColor: '#E8E7E7',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 17,
    color: '#464646',
    fontWeight: 'bold',
  },
  cardHeaderBottomBorder: {
    width,
    height: 1,
    opacity: 0.5,
    backgroundColor: '#D6D6D6',
  },
  durationView: {
    width: width - 70,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listItemColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 16,
    color: '#464646',
    opacity: 0.7,
  },
});
