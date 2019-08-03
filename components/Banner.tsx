import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Banner(){
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>CryptoTracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: '#823',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  greeting : {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#385'
  }
});