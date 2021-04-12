import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../../constants/styles';

const Login = props => {
  useEffect(() => {
    console.log('[LOGIN]:[USE_EFFECT]');
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
