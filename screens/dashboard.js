import React from 'react';
import { StyleSheet, Text, Picker,View, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: '',
      user: 'Prabhakaran' ,
      Restaurants: '',
      desc: '',
      // exp2: '',
      prabha:'',
      vicky:'',
    };
  }

//   componentDidMount = async () => {
//     try {
//    const response = await fetch("http://172.20.8.222:5000/search")
//    const posts = await response.json()
   
//    this.setState({
//      prabha:posts.prabha,
//      vicky:posts.vicky
   
//  });
 
//  } catch (e) {
//    console.log("Error @ table !!!!!!", e)
//  }
//   };


  submit = async () => {
    let req = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        exp: parseInt(this.state.exp),
        user: this.state.user,
        Restaurants: this.state.Restaurants,
        desc: this.state.desc,
        curTime: new Date().toLocaleString(),
      })
    }
    try {
      // const response = await fetch("https://evening-earth-13475.herokuapp.com/insert", req)
      const response = await fetch("http://172.20.8.222:5000/insert", req)

      const posts = await response.json()
      console.log("data inserted!!!!!")
      this.clearText();
    } catch (e) {
      console.log("Error @ submit!!!!!!", e)
    }
  };


  clearText = () => {
    this.setState({
      exp1: '',
      user: "" ,
    })
  }

  render() {


    return (
      <ScrollView>

      <View style={styles.container1}>
    
    <View style={{marginTop:5}}>
          <Text style={styles.heading}>Expense :</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.username}
            onChangeText={exp => this.setState({ exp })}
          />

          <Picker
          selectedValue={this.state.user}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({user: itemValue})
          }>
      <Picker.Item label="Prabhakaran" value="Prabhakaran" />
      <Picker.Item label="Vignesh" value="Vignesh" />
        </Picker>

        <Text style={styles.heading}>Restaurants :</Text>
                <TextInput
                  style={styles.inputs}
                  value={this.state.username}
                  onChangeText={Restaurants => this.setState({ Restaurants })}
                />

          <Text style={styles.heading}>Description :</Text>
                <TextInput
                  style={styles.inputs}
                  value={this.state.username}
                  onChangeText={desc => this.setState({ desc })}
                />


          <TouchableOpacity style={styles.buttons} onPress={this.submit}>
            <Text style={styles.but_name}>Submit</Text>
          </TouchableOpacity>
          </View>
      
      </View>


      <Text>Prabha's Expense : {this.state.prabha}</Text>     
       <Text>Vicky's Expense : {this.state.vicky}</Text>

  

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({

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
  pickerStyle2: {
    height: 75,
    width: "100%",
    color: '#344953',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 15
  },

  container1: { flex: 1, padding: 13, paddingTop: 0, backgroundColor: '#fff' },
    // container: { backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    Headtext: { textAlign: 'center', fontWeight: "bold" },
    text: { textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});