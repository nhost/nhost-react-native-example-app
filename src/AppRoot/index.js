import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { auth } from '../helpers/nhostSdk';
import { deviceWidth } from '../helpers/constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginComponent from '../exampleAuth/login';
import RegisterComponent from '../exampleAuth/register';

const Stack = createStackNavigator();

function Home(props) {
  return (
    <View style={{ height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image source={require('../assets/logo.png')} style={{
        width: 350,
        resizeMode: 'contain'
      }} />
      <Text style={{ fontSize: 20, marginBottom: 40 }}>Nhost React Native Starter</Text>
      <TouchableOpacity onPress={() => props?.navigation?.navigate('Login')}>
        <View style={{ width: deviceWidth - 32, paddingVertical: 14, backgroundColor: '#007AFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props?.navigation?.navigate('Register')}>
        <View style={{ width: deviceWidth - 32, paddingVertical: 14, backgroundColor: '#007AFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

function AppScreen(props) {
  const handleLogout = () => {
    auth.logout();
    props?.navigation?.navigate('Home')
  }
  return (
    <View style={{ height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, marginBottom: 40 }}>Have Your App In Here !</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={{ width: deviceWidth - 150, paddingVertical: 14, backgroundColor: '#007AFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const AppRoot = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Register" component={RegisterComponent} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoot;