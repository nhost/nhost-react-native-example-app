import React from 'react';
import { View, Text } from 'react-native';

const AppRoot = (props) => {
  return (
    <View style={{ height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Hello, World !</Text>
    </View>
  )
}

export default AppRoot;