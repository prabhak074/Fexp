import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Expense','User','Time','Reastaurants','Description'],
      widthArr: [100, 100, 130, 100, 120,],
      tableData: [],
    };
  }

  componentDidMount = async () => {
    try {
   const response = await fetch("http://172.20.8.222:5000/summary")
   const table = await response.json()
   console.log("data inserted @ table")
  //  console.log("Prabha =>",posts.Prabhakaran)
  //  console.log("vicky =>",posts.Vicky)

   this.setState({
     tableData: [table.expense,table.user,table.time,table.rest,table.desc,],
 });
 
 } catch (e) {
   console.log("Error @ table !!!!!!", e)
 }
  };


  render() {
    const state = this.state;

    return (
      <ScrollView>
      <View >
          <View  style={styles.container1}>
                    <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 0, paddingBottom: 10, paddingLeft: 7 }}>Food Expense :</Text>
                    <ScrollView horizontal={true}>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head}
                        textStyle={styles.Headtext} />
                        {
                            <TableWrapper style={{ flex: 1 }}>
                                <Cols data={state.tableData}
                                 widthArr={state.widthArr}
                                    heightArr={[60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,]
                                   }
                                    textStyle={styles.text} />
                            </TableWrapper>
                        }
                    </Table>
                    </ScrollView>
                </View>              
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
});