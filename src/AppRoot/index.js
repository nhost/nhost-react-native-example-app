import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../helpers/nhostSdk';

const AppRoot = (props) => {
  useEffect(() => {
    // auth.login('karthik@timeless.co', '1234');
  }, [])
  return (
    <View style={{ height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Hello, World !</Text>
    </View>
  )
}

export default AppRoot;