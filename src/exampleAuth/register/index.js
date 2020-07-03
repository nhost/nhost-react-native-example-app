import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { deviceWidth } from '../../helpers/constants';
import { auth } from '../../helpers/nhostSdk';
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const RegisterComponent = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const formDataValid = React.useMemo(() => {
    if (!emailRegex.test(formState.email) || (formState.password.length < 3)) {
      return false;
    }
    else {
      return true;
    }
  }, [formState.email, formState.password])


  const handleRegister = async () => {
    if (formDataValid) {
      try {
        await auth.register(formState.email, formState.password);
        await auth.login(formState.email, formState.password);
        props?.navigation?.navigate('AppScreen')
      } catch (e) {
        Alert.alert('Error Registering Account', 'Try using another email.')
      }
    } else {
      Alert.alert('Invalid Form Fields')
    }
  }
  return (
    <View style={{ height: '100%', justifyContent: 'center', backgroundColor: 'white', paddingHorizontal: 16 }}>
      <Text style={{ textAlign: 'center', marginBottom: 30, fontSize: 24 }}>Create an account !</Text>
      <View style={styles.formInputBlock}>
        <TextInput
          style={styles.formInput}
          autoFocus
          autoCapitalize='none'
          placeholder='Email'
          onChange={(event) => {
            setFormState({
              ...formState,
              email: event.nativeEvent.text
            })
          }}
        />
      </View>
      <View style={styles.formInputBlock}>
        <TextInput
          autoCapitalize='none'
          style={styles.formInput}
          placeholder='*****'
          onChange={(event) => {
            setFormState({
              ...formState,
              password: event.nativeEvent.text
            })
          }}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <View style={{ width: deviceWidth - 32, paddingVertical: 14, backgroundColor: '#007AFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  formInput: {
    width: '78%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    fontSize: 16,
    lineHeight: 21,
    paddingLeft: 18
  },
  formInputBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dbdbdb',
    height: 50,
    borderRadius: 12,
    marginBottom: 32
  },
})


RegisterComponent.propTypes = {
}


RegisterComponent.defaultProps = {
}

export default RegisterComponent;