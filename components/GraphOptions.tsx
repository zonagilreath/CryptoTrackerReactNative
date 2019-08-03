import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Options(){
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Options</Text>
        </View>
        )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#823',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  greeting : {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#385'
  }
});