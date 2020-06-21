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
import UpdateUser from './components/UpdateUser'
import Schedule from './components/Schedule'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#0a2f91',
        },
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="AdminHome" options={{headerShown:false}} component={AdminHome} />
        <Stack.Screen name="Schedule" options={{ title: 'Schedule'}} component={Schedule}/>
        <Stack.Screen name="CreateSchedule" options={{ title: 'Create Schedule'}} component={CreateSchedule} />
        <Stack.Screen name="ClockInOut" options={{ title: 'Enter Your Time'}} component={ClockInOut} />
        <Stack.Screen name="Reports" options={{ title: 'Write a Report'}} component={Reports} />
        <Stack.Screen name="Panic" component={Panic} />
        <Stack.Screen name="Flash" component={Flash} />
        <Stack.Screen name="RegisterUser" options={{ title: 'Register a Guard'}} component={RegisterUser}/>
        <Stack.Screen name="ViewReports" options={{ title: 'View Reports'}} component={ViewReports}/>
        <Stack.Screen name="ViewSchedule" options={{ title: 'View Your Schedule'}} component={ViewSchedule}/>
        <Stack.Screen name="UpdateUser" options={{ title: 'Update Guard Record'}} component={UpdateUser}/>
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
