import * as React from 'react';
import { Button, View, Text ,Tab} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import CreateSchedule from './components/CreateSchedule';
import ClockInOut from './components/ClockInOut';
import Reports from './components/Reports'
import Panic from './components/Panic';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateSchedule" component={CreateSchedule} />
        <Stack.Screen name="ClockInOut" component={ClockInOut} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Panic" component={Panic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
