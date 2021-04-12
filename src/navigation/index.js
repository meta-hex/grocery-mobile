import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import AuthNavigation from './auth';
import AppNavigation from './main';

const Stack = createStackNavigator();

const RootStack = () => {
  const {authenticated} = useSelector(state => state.user);
  return (
    <Stack.Navigator>
      {authenticated ? (
        <Stack.Screen
          name="main"
          component={AppNavigation}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="auth"
          component={AuthNavigation}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor="transparent"
      />
      <RootStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
