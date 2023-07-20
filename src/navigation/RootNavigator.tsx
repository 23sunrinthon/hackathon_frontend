import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import StoreSearch from '@components/StoreSearch';
import Register from '@screens/Register';
import Measure from "@screens/Measure";
import BottomNavigation from './BottomNavigation';
import Login from '../screens/Login';
import Party from '../screens/Party';
import GroupSetting from '../screens/GroupSetting'
import NewGroup from "@screens/NewGroup";
import GroupNext from "@screens/GroupNext";

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
      <Stack.Screen name="Measure" component={Measure} />
      <Stack.Screen name="Party" component={Party} />
      <Stack.Screen name="GroupSetting" component={GroupSetting} />
      <Stack.Screen name="NewGroup" component={NewGroup} />
      <Stack.Screen name="StoreSearch" component={StoreSearch} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="GroupNext" component={GroupNext} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
