import * as React from 'react';
import { Button, View, Text } from 'react-native';


function Reports({ navigation,route}) {
   const user_name = route.params.username;
   
    return (
      <View>
          <Text>Report Page {user_name}</Text>
      </View>


    );
  }

  export default Reports