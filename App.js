/**
 * Mobile Application :: Class Management System
 * Project Developed By: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import BatchList from './src/components/BatchList/BatchList';
import LogIn from './src/components/Authentication/LogIn';
import SideMenu from './src/components/SideMenu/SideMenu';
import Logout from './src/components/Authentication/Logout';

const { width } = Dimensions.get('window');

const Stack = {
  SplashScreen: {
    name: 'SplashScreen',
    screen: SplashScreen,
  },
  Login: {
    screen: LogIn,
  },
  Logout: {
    screen: Logout,
  },
  BatchList: {
    screen: BatchList,
  },
};

const DrawerRoutes = {
  Home: {
    screen: StackNavigator(Stack, { initialRouteName: 'SplashScreen' }),
  },
};

const ClassManager = StackNavigator(
  {
    Drawer: {
      name: 'Drawer',
      screen: DrawerNavigator(DrawerRoutes, {
        drawerWidth: width * 0.7,
        contentComponent: SideMenu,
      }),
    },
    ...Stack,
  },
  {
    drawerWidth: 300,
    headerMode: 'none',
  },
);

export default ClassManager;
