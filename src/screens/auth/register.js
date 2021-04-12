import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../../constants/styles';

const Register = props => {
  useEffect(() => {
    console.log('[REGISTER]:[USE_EFFECT]');
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Text>Register</Text>
    </SafeAreaView>
  );
};

export default Register;
