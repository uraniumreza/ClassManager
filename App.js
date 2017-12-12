/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * App.js || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StackNavigator } from 'react-navigation';

import SplashScreen from './src/components/SplashScreen/SplashScreen';
import HomePage from './src/components/HomePage/HomePage';
import LogIn from './src/components/Authentication/LogIn';

const duMedico = StackNavigator(
  {
    SplashScreen: {
      name: 'SplashScreen',
      screen: SplashScreen,
    },
    Login: {
      screen: LogIn,
    },
    HomePage: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default duMedico;
