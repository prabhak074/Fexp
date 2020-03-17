import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Prabhakaran', 'Vignesh', 'Time'],
      tableData: [],
    };
  }

  componentDidMount = async () => {
    try {
   const response = await fetch("http://172.20.8.222:3000/load-data")
   const posts = await response.json()
  //  console.log(posts)
   console.log("Prabha =>",posts.Prabhakaran)
   console.log("vicky =>",posts.Vicky)

   this.setState({
     tableData: [posts.prabha,posts.vicky,posts.time],
 });
 
 } catch (e) {
   console.log("Error!!!!!!", e)
 }
  };


  render() {
    const state = this.state;

    return (
      <ScrollView>
      <View style={styles.container}>

          <View  style={styles.container1}>
                    <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 7 }}>Food Expense :</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.Headtext} />
                        {
                            <TableWrapper style={{ flex: 1 }}>
                                <Cols data={state.tableData}
                                    heightArr={[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]}
                                    textStyle={styles.text} />
                            </TableWrapper>
                        }
                    </Table>
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
    // alignItems: "center",
    // justifyContent: 'center',
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
  container1: { flex: 1, padding: 13, paddingTop: 0, backgroundColor: '#fff',marginTop:35 },
    container: { backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    Headtext: { textAlign: 'center', fontWeight: "bold" },
    text: { textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});