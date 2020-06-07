import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';


export default class extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const params = this.props.route.params;
    const user_name = params.username
    let data=[{
      value:'Zeefa'},
      {value:'Saim'},
      {value:'Suhail' 
    }];
    return (
     <View style={StyleSheet.dropdown}>
         <Text>CreateSchedule {user_name} </Text>
         <Dropdown
         label='Name'
         data={data}
         />
     </View>
   );
  }
}

const style = StyleSheet.create({
  dropdown:{
    width:10,
    color:'red'
  },
})