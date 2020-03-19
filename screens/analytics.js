import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { VictoryPie} from "victory-native";

export default class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

//   componentDidMount = async () => {
//     try {
//    const response = await fetch("http://172.20.8.222:5000/summary")
//    const pie = await response.json()

//    this.setState({

//     //  data: [
//     //    { x: "Pass", y: pie.pass[0] },
//     //    { x: "Fail", y: pie.fail[0] },
//     //  ]
//    });
//  } catch (e) {
//    console.log("Error @ CHART !!!!!!", e)
//  }
//   };


  render() {
    const state = this.state;   

    return (
      <ScrollView>
            <View >
            <VictoryPie
     
        data={[
          { x: "Cat", y: 62 },
          { x: "Dog", y: 91 },
          { x: "Fish", y: 55 },
          { x: "Bird", y: 55 }
        ]}
      />


          </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({


  container1: { flex: 1, paddingTop: 0, backgroundColor: '#fff',marginTop:35 },
    container: { backgroundColor: '#fff' },
    head: { height: 50, backgroundColor: '#f1f8ff' },
    Headtext: { textAlign: 'center', fontWeight: "bold" },
    text: { textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  
   
});