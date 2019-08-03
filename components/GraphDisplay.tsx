import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryAxis, VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from "victory-native";

const badData = {
'2018-01-25': 11137.2375,
'2018-01-26': 11090.0638,
'2018-01-27': 11407.1538,
'2018-01-28': 11694.4675,
'2018-01-29': 11158.3938,
'2018-01-30': 10034.9975,
'2018-01-31': 10166.5063,
'2018-02-01': 9052.5763,
'2018-02-02': 8827.63,
'2018-02-03': 9224.3913,
'2018-02-04': 8186.6488,
'2018-02-05': 6914.26,
'2018-02-06': 7700.3863,
'2018-02-07': 7581.8038,
'2018-02-08': 8237.2363,
'2018-02-09': 8689.8388,
'2018-02-10': 8556.6125,
'2018-02-11': 8070.7963,
'2018-02-12': 8891.2125,
'2018-02-13': 8516.2438,
'2018-02-14': 9477.84,
'2018-02-15': 10016.4888,
'2018-02-16': 10178.7125,
'2018-02-17': 11092.1475,
'2018-02-18': 10396.63,
'2018-02-19': 11159.7238,
'2018-02-20': 11228.2413,
'2018-02-21': 10456.1725,
'2018-02-22': 9830.4263,
'2018-02-23': 10149.4625,
'2018-02-24': 9682.3825,
'2018-02-25': 9586.46
}

const data = [
  {date: '2019-07-03', price: 11976.6317},
  {date: '2019-07-04', price: 11151.9183},
  {date: '2019-07-05', price: 10996.4267},
  {date: '2019-07-06', price: 11252.4533},
  {date: '2019-07-07', price: 11476.4083},
  {date: '2019-07-08', price: 12294.6567},
  {date: '2019-07-09', price: 12563.215},
  {date: '2019-07-10', price: 12096.6533},
  {date: '2019-07-11', price: 11345.7717},
  {date: '2019-07-12', price: 11789.3367},
  {date: '2019-07-13', price: 11350.6283},
  {date: '2019-07-14', price: 10194.21},
  {date: '2019-07-15', price: 10842.4517},
  {date: '2019-07-16', price: 9422.4517},
  {date: '2019-07-17', price: 9692.7067},
  {date: '2019-07-18', price: 10636.91},
  {date: '2019-07-19', price: 10526.3917},
  {date: '2019-07-20', price: 10754.29},
  {date: '2019-07-21', price: 10586.2433},
  {date: '2019-07-22', price: 10325.825},
  {date: '2019-07-23', price: 9849.82},
  {date: '2019-07-24', price: 9771.5667},
  {date: '2019-07-25', price: 9882.1},
  {date: '2019-07-26', price: 9844.5583},
  {date: '2019-07-27', price: 9466.2717},
  {date: '2019-07-28', price: 9527.7717},
  {date: '2019-07-29', price: 9501.0317},
  {date: '2019-07-30', price: 9588.6033},
  {date: '2019-07-31', price: 10090.535},
  {date: '2019-08-01', price: 10405.2067},
  {date: '2019-08-02', price: 10526.2167}
];

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

