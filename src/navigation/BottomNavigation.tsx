import styled, {DefaultTheme, withTheme} from 'styled-components/native';
import {WithLocalSvg} from 'react-native-svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StatusBar, TouchableOpacity, ImageSourcePropType} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExerciseIcon from '@assets/icons/exercise.svg';
import ExerciseSelected from '@assets/icons/exercise_selected.svg';
import LocationIcon from '@assets/icons/location.svg';
import LocationSelected from '@assets/icons/location_selected.svg';
import HomeIcon from '@assets/icons/home.svg';
import HomeSelected from '@assets/icons/home_selected.svg';
import PtIcon from '@assets/icons/pt.svg';
import PtSelected from '@assets/icons/pt_selected.svg';
import ShoppingIcon from '@assets/icons/shopping.svg';
import ShoppingSelected from '@assets/icons/shopping_selected.svg';
import Home from '@screens/Home';
import Location from '@screens/Location';
import Products from '@screens/Products';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import Chat from '../screens/Chat';
import Store from '../screens/Store';
import Settings from '../screens/Settings';
import Typography from '../components/Typography';

const BottomNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route, navigation}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <HomeSelected height={24} />
                    <Typography size={12} color="orange500" weight={600}>
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
                    <ExerciseSelected height={24} />
                    <Typography size={12} color="orange500" weight={600}>
                      운동법
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <ExerciseIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      운동법
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Location') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <LocationSelected height={24} />
                    <Typography size={12} color="orange500" weight={600}>
                      주변 시설
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <LocationIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      주변 시설
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Settings') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <PtSelected height={24} />
                    <Typography size={12} color="orange500" weight={600}>
                      PT
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <PtIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      PT
                    </Typography>
                  </ItemContainer>
                );
              }
              if (route.name === 'Store') {
                return focused ? (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <ShoppingSelected height={24} />
                    <Typography size={12} color="orange500" weight={600}>
                      스토어
                    </Typography>
                  </ItemContainer>
                ) : (
                  <ItemContainer onPress={() => navigation.navigate(route)}>
                    <ShoppingIcon height={24} />
                    <Typography size={12} color="gray500" weight={500}>
                      스토어
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
          })}>
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Location" component={Location} />
          <Tab.Screen name="Home" component={Home} />

          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Store" component={Store} />
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
