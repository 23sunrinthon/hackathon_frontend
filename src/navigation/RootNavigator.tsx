import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import StoreSearch from '@components/StoreSearch';
import Register from '@screens/Register';
import BottomNavigation from './BottomNavigation';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={BottomNavigation} />
      <Stack.Screen name="StoreSearch" component={StoreSearch} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
