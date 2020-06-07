import React,{Component} from 'react';
import { Button, View, Text } from 'react-native';


export default class Reports extends Component {
   render(){
    const params = this.props.route.params;
    const user_name = params.username
    
   
    return (
      <View>
          <Text>Report Page {user_name}</Text>
      </View>


    );
   }
  }

//export default Reports