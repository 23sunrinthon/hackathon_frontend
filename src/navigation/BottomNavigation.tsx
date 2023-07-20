import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreIcon from '@assets/icons/store.svg';
import StoreSelected from '@assets/icons/storeselected.svg';
import ChatIcon from '@assets/icons/chat.svg';
import ChatSelected from '@assets/icons/chatselected.svg';
import HomeIcon from '@assets/icons/home.svg';
import HomeSelected from '@assets/icons/homeselected.svg';
import PersonIcon from '@assets/icons/person.svg';
import PersonSelected from '@assets/icons/personselected.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import SettingsSelected from '@assets/icons/settingsselected.svg';
import Home from '@screens/Home';
import MyInfo from '@screens/MyInfo';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CardStyleInterpolators} from '@react-navigation/stack';
import Chat from '@screens/Chat';
import Store from '@screens/Store';
import React from 'react';
import Settings from '@screens/Settings';
import Typography from '@components/Typography';

const BottomNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route, navigation}) => ({
            tabBarIcon: ({focused}) => {
              if (route.name === 'Home') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <HomeSelected height={24} />
                    <Typography size={12} color="red500" weight={600}>
                      홈
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <HomeIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      홈
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Chat') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <ChatSelected height={24} />
                    <Typography size={12} color="red500" weight={600}>
                      채팅
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <ChatIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      채팅
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'MyInfo') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <PersonSelected height={24} />
                    <Typography size={12} color="red500" weight={600}>
                      내 정보
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <PersonIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      내 정보
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Store') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <StoreSelected height={24} />
                    <Typography size={12} color="red500" weight={600}>
                      상점
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <StoreIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      상점
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Settings') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <SettingsSelected height={24} />
                    <Typography size={12} color="red500" weight={600}>
                      설정
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <SettingsIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      설정
                    </Typography>
                  </ItemContainer>
                );
              }
            },
            tabBarStyle: [
              {
                height: 100,
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#F1F2F3',
              },
            ],
            indicatorStyle: {
              width: 0,
              height: 0,
              elevation: 0,
            },
            style: {
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              border: 'none',
            },
            tabBarLabelStyle: {
              fontWeight: '400',
              margin: 0,
              padding: 0,
              width: 52,
            },
            tabBarItemStyle: {
              width: 52,
              margin: 0,
              padding: 0,
            },
            labelStyle: {margin: 0, padding: 0},
            tabBarShowLabel: false,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}>
          <Tab.Screen name="Chat" component={Chat} />

          <Tab.Screen name="MyInfo" component={MyInfo} />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Tab.Screen name="Store" component={Store} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </>
  );
};

const ItemContainer = styled.TouchableOpacity`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default BottomNavigation;
