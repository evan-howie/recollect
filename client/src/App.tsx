import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Wrap from './screens/Wrap/Wrap';
import WrapList from './screens/Wrap/WrapList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="WrapStack" component={WrapStack} />
    </Tab.Navigator>
  );
}

function WrapStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wrap" component={Wrap} />
      <Stack.Screen name="WrapList" component={WrapList} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainAppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
