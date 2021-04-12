import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/main/home';
import Cart from '../screens/main/cart';
import Notifications from '../screens/main/notifications';
import Account from '../screens/main/account';
import config from '../constants/config';
import styles from '../constants/styles';
// import {Dimensions} from 'react-native';
// const {width, height} = Dimensions.get('window');

import HomeIcon from '../../assets/img/home.svg';
import UserIcon from '../../assets/img/user.svg';
import BellIcon from '../../assets/img/bell.svg';
import ShoppingIcon from '../../assets/img/shopping-cart.svg';

const BottomTab = createBottomTabNavigator();

const AppNavigation = props => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: config.color.primary,
        inactiveTintColor: config.color.dark,
        style: styles.bottom_tab,
        labelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <HomeIcon
              width={28}
              height={28}
              color={color}
              fill={focused ? color : 'none'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size, focused}) => (
            <ShoppingIcon
              width={28}
              height={28}
              color={color}
              fill={focused ? color : 'none'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size, focused}) => (
            <BellIcon
              width={28}
              height={28}
              color={color}
              fill={focused ? color : 'none'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size, focused}) => (
            <UserIcon
              width={28}
              height={28}
              color={color}
              fill={focused ? color : 'none'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigation;
