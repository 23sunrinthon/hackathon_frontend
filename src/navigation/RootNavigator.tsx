import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';
// import modalState from "@/store/modal";
// import {useCallback, useEffect} from "react";
// import messaging from "@react-native-firebase/messaging";
import StoreSearch from '@components/StoreSearch';
import BottomNavigation from './BottomNavigation';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  // const [modal,setModal] = useRecoilState(modalState);
  // const foregroundListener = useCallback(() => {
  //   messaging().onMessage(async remoteMessage => {
  //     setModal(
  //       {
  //         ...modal,
  //         open:true,
  //         title:remoteMessage.notification.title,
  //         content:remoteMessage.notification.body,
  //         buttonText:"확인"
  //       }
  //     );
  //   });
  // }, [])

  // useEffect(async () => {
  //   foregroundListener();
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     const token = await messaging().getToken();
  //     console.log(token);
  //   }
  // },[]);
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Main" component={Main} /> */}
      {/* <Stack.Screen name="Search" component={Search} /> */}
      {/* <Stack.Screen name="Auth" component={Auth} /> */}
      {/* <Stack.Screen name="Shop" component={Shop} /> */}
      {/* <Stack.Screen name="Reservation" component={Reservation} /> */}
      {/* <Stack.Screen name="ReservationResult" component={ReservationResult} /> */}
      {/* <Stack.Screen name="Main" component={Main} /> */}
      {/* <Stack.Screen name="Search" component={Search} /> */}
      {/* <Stack.Screen name="Auth" component={Auth} /> */}
      {/* <Stack.Screen name="Shop" component={Shop} /> */}
      {/* <Stack.Screen name="Reservation" component={Reservation} /> */}
      {/* <Stack.Screen name="ReservationResult" component={ReservationResult} /> */}
      <Stack.Screen name="Tab" component={BottomNavigation} />
      <Stack.Screen name="StoreSearch" component={StoreSearch} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
