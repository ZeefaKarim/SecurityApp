import * as React from 'react';
import { Button, View, Text,Alert } from 'react-native';


class Panic extends React.Component{
  panicPressed(){
    alert('Panic Pressed now');
  }
  render(){
    return(
      console.log('fs')
    );
  }
  //const user_name = route.params.username;

}

export default Panic;
