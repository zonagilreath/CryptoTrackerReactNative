import React from 'react';
import { StyleSheet, Text, View, DatePickerAndroid } from 'react-native';
import GraphDisplay from './GraphDisplay.tsx';
import GraphOptions from './GraphOptions.tsx';
import moment from 'moment';

const badData = {
'2018-01-25': 11137.2375,'2018-01-26': 11090.0638,'2018-01-27': 11407.1538,'2018-01-28': 11694.4675,'2018-01-29': 11158.3938,'2018-01-30': 10034.9975,'2018-01-31': 10166.5063,'2018-02-01': 9052.5763,'2018-02-02': 8827.63,'2018-02-03': 9224.3913,'2018-02-04': 8186.6488,'2018-02-05': 6914.26,'2018-02-06': 7700.3863,'2018-02-07': 7581.8038,'2018-02-08': 8237.2363,'2018-02-09': 8689.8388,'2018-02-10': 8556.6125,'2018-02-11': 8070.7963,'2018-02-12': 8891.2125,'2018-02-13': 8516.2438,'2018-02-14': 9477.84,'2018-02-15': 10016.4888,'2018-02-16': 10178.7125,'2018-02-17': 11092.1475,'2018-02-18': 10396.63,'2018-02-19': 11159.7238,'2018-02-20': 11228.2413,'2018-02-21': 10456.1725,'2018-02-22': 9830.4263,'2018-02-23': 10149.4625,'2018-02-24': 9682.3825,'2018-02-25': 9586.46}

export default class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      endDate: moment().format('YYYY-MM-DD'),
      startDate: moment().subtract(30, 'days').format('YYYY-MM-DD'),
      data: this.dataCleaner(badData)
    }
    this.dataUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    this.pickDate = this.pickDate.bind(this);
  }

  componentDidMount(){
    this.requestData();
  }

  dataCleaner(data){
    return Object.keys(data).map(key => {
      console.log(key)
      console.log(data[key])
      return {
        date: key,
        price: data[key]
      }
    })
  }

  async pickDate(option){
    const maxDate = (option === 'endDate') ? new Date() : new Date(this.state.endDate);
    const minDate = (option === 'endDate') ? new Date(this.state.startDate) : new Date('2010-07-17');
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({maxDate, minDate});
      if (action !== DatePickerAndroid.dismissedAction) {
        let date = new Date(year, month, day);
        let newState = {};
        newState[option] = moment(date).format('YYYY-MM-DD');
        await this.setState(newState);
        console.log(this.state)
        // console.warn('date changed', this.state.startDate, this.state.endDate);
        this.requestData();
      }
    } catch ({code, message}) {
      console.warn(`error `, code, message);
    }
  }

  async requestData(){
    // const response = await fetch(`${this.dataUrl}?start=${this.state.startDate}&end=${this.state.endDate}`);
    // console.log('response:', response)
    // const data = await this.dataCleaner(response.json());
    // console.log('data from request: ', data)
    // this.setState({'data': data})
    fetch(`${this.dataUrl}?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then(res => res.json())
      .then(json => this.dataCleaner(json.bpi))
      .then(data => this.setState({data}))
  }

  render(){
    return (
      <React.Fragment>
        <GraphDisplay data={this.state.data}></GraphDisplay>
        <GraphOptions pickDate={this.pickDate}
          startDate={this.state.startDate}
          endDate={this.state.startDate}>
        </GraphOptions>
      </React.Fragment>
    )
  }
}