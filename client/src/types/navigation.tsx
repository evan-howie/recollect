// navigationTypes.ts
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  MainApp: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type MainAppScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainApp'
>;

// Define the routes and parameters for each tab
export type RootTabParamList = {
  Home: undefined;
  Account: undefined;
};

// Define navigation prop types for each tab
export type HomeTabNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;
export type AccountTabNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Account'
>;
