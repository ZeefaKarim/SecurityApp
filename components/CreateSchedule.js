import * as React from 'react';
import { Button, View, Text } from 'react-native';


function CreateSchedule({ navigation,route}) {
   const user_name = route.params.username;
   const age = route.params.age;
    return (
      <View>
          <Text>CreateSchedule {user_name} {age}</Text>
      </View>


    );
  }

  export default CreateSchedule