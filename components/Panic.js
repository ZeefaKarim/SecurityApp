import * as React from 'react';
import { Button, View, Text,Alert } from 'react-native';


function Panic({ navigation,route}) {
   const user_name = route.params.username;
    return (
        Console.log('Inside Panic')
        //alert('Panic Pressed')
    );
  }

  export default Panic