import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import Graph from './components/Graph';

export default function App() {
  return (
    <React.Fragment>
      <Banner></Banner>
      <Graph></Graph>
    </React.Fragment>
  );
}
