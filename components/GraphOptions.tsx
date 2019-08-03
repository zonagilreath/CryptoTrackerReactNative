import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function GraphOptions(props){
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Options</Text>
      <View>
        <Button title="Start Date" onPress={()=>props.pickDate('startDate')}/>
        <Text>{props.startDate}</Text>
      </View>
      <View>
        <Button title="End Date" onPress={()=>props.pickDate('endDate')}/>
        <Text>{props.endDate}</Text>
      </View>
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
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#385'
  }
});