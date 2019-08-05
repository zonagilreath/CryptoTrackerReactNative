import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryAxis, VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from "victory-native";

export default function GraphDisplay(props) {
  console.log('props.data', props.data)
  return (
    <View style={styles.container}>
      <VictoryChart padding={{top: 0, left: 35, bottom: 65, right: 5}} width={400}  theme={VictoryTheme.material} viewBox={"0 0 100 2"}>
        <VictoryLine data={props.data} x="date" y="price" />
        <VictoryAxis
          tickCount={10}
          tickLabelComponent={
            <VictoryLabel 
              dx={-30}
              angle={-50}
            />
          }
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 5,
  }
});

