import * as React from 'react';
import { Button, View, Text ,Tab, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import CreateSchedule from './components/CreateSchedule';
import ClockInOut from './components/ClockInOut';
import Reports from './components/Reports'
import Panic from './components/Panic';
import Flash from './components/Flash';
import AdminHome from './components/AdminHome';
import RegisterUser from './components/RegisterUser';
import ViewReports from './components/ViewReports';
import ViewSchedule from './components/ViewSchedule';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2475B0',
        },
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" options={{ title: 'Welcome' }} component={Login} />
        <Stack.Screen name="Home" options={{ title: 'My Home' }} component={Home} />
        <Stack.Screen name="AdminHome" options={{ title: 'Admin Home' }} component={AdminHome} />
        <Stack.Screen name="CreateSchedule" options={{ title: 'Create Schedule' }} component={CreateSchedule} />
        <Stack.Screen name="ClockInOut" options={{ title: 'Enter Your Time' }} component={ClockInOut} />
        <Stack.Screen name="Reports" options={{ title: 'Write a Report' }} component={Reports} />
        <Stack.Screen name="Panic" component={Panic} />
        <Stack.Screen name="Flash" component={Flash} />
        <Stack.Screen name="RegisterUser" options={{ title: 'Register a Guard' }} component={RegisterUser}/>
        <Stack.Screen name="ViewReports" options={{ title: 'View Reports' }} component={ViewReports}/>
        <Stack.Screen name="ViewSchedule" options={{ title: 'View Your Schedule' }} component={ViewSchedule}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  header:{
    alignSelf:'center',
  }
});
export default App;
