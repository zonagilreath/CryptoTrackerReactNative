import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner.tsx';
import Graph from './components/Graph.tsx';
import Options from './components/GraphOptions.tsx';

export default function App() {
  return (
    <React.Fragment>
    <Banner></Banner>
    <Graph></Graph>
    <Options></Options>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#823',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
  greeting : {
    fontSize: 100,
    textAlign: 'center',
    backgroundColor: '#385',
    textAlignVertical: 'top'
  }
});
