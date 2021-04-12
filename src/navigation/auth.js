import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthNavigation = props => {
  return <RootStack />;
};

export default AuthNavigation;
