import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Profile from './screens/Profile';
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
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
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
