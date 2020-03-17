import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp1: '',
      // exp2: '',
    };
  }


  submit = async () => {
    let req = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        exp1: this.state.exp1,
        // exp2: this.state.exp2,
        curTime: new Date().toLocaleString()

      })
    }
    try {
      const response = await fetch("http://172.20.8.222:3000/insert", req)
      const posts = await response.json()
      console.log("data inserted!!!!!")
    } catch (e) {
      console.log("Error!!!!!!", e)
    }
  };


  clearText = () => {
    this.setState({
      exp1: '',
      exp2: '',
    })
  }

  render() {
    const state = this.state;

    return (
      <ScrollView>

      <View style={styles.container}>
    
    <View style={{marginTop:5}}>
          <Text style={styles.heading}>Prabhakaran :</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.username}
            onChangeText={exp1 => this.setState({ exp1 })}
          />

          {/* <Text style={styles.heading}>Vicky :</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.password}
            onChangeText={exp2 => this.setState({ exp2 })}
          /> */}

          <TouchableOpacity style={styles.buttons} onPress={this.submit}>
            <Text style={styles.but_name}>Submit</Text>
          </TouchableOpacity>
          </View>
                   
      </View>

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  logo_2: {
    width: 200,
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'center',
  },
  heading: {
    color: "#062850",
    marginEnd: 200,
    margin: 5,
    fontWeight: 'bold',
  },
  pass: {
    color: "#062850",
    margin: 5,
    fontWeight: 'bold',
  },
  but_name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#062850",
  },
  content: {
    flexDirection: 'column',
    borderBottomColor: 'black',
    padding: 10,
    marginTop: 40,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    width: 250,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: "#e9f0fe"
  },
  buttons: {
    padding: 10,
    width: 100,
    height: 40,
    marginTop: 25,
    // paddingTop:10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#52B054',
    alignItems: 'center',
    justifyContent: "center",
  },
  container1: { flex: 1, padding: 13, paddingTop: 0, backgroundColor: '#fff' },
    // container: { backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    Headtext: { textAlign: 'center', fontWeight: "bold" },
    text: { textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});