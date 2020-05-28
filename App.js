import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProvideAuth } from './src/useAuth';
import CheckAuth from './src/CheckAuth';

export default function App() {
  return (
    <View style={styles.container}>
      <ProvideAuth>
        <CheckAuth />
      </ProvideAuth>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
