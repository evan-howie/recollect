// navigationTypes.ts
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

// Define the routes and parameters for each tab
export type RootTabParamList = {
  Home: undefined;
  Camera: undefined;
  Account: undefined;
};

// Define navigation prop types for each tab
export type HomeTabNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;
export type CameraTabNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Camera'
>;
export type AccountTabNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Account'
>;
