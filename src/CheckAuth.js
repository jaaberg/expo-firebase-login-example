import React, { useState } from 'react';
import { useAuth } from './useAuth.js';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// This component checks Auth and updates auth to redux
function CheckAuth(props) {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!auth.fbUser) {
    return (
      <View>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            padding: 5,
            marginBottom: 10,
          }}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            padding: 5,
            marginBottom: 10,
          }}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => auth.signin(email, password)}>
          <Text>Logg inn</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <Text>Logged in</Text>;
}

export default CheckAuth;
