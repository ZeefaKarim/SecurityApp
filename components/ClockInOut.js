import * as React from 'react';
import { Button, View, Text } from 'react-native';


function ClockInOut({ navigation,route}) {
   const user_name = route.params.username;
   const age = route.params.age;
    return (
      <View>
          <Text>ClockInOut Page {user_name} {age}</Text>
      </View>


    );
  }

  export default ClockInOut