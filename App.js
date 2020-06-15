import * as React from 'react';
import { Button, View, Text ,Tab, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
//import Login from './components/login_v2';
import CreateSchedule from './components/CreateSchedule';
import ClockInOut from './components/ClockInOut';
import Reports from './components/Reports'
import Panic from './components/Panic';
import Flash from './components/Flash';
import AdminHome from './components/AdminHome';
import RegisterUser from './components/RegisterUser';
//import RegisterUser from './components/Register_v2.js';
import ViewReports from './components/ViewReports';
import ViewSchedule from './components/ViewSchedule';
import * as firebase from "firebase";



var firebaseConfig = {
  apiKey: "AIzaSyC4S8jgMxMNzb_huw7BrhD-ReAtk6-xM6g",
  authDomain: "securityapp-cc1b0.firebaseapp.com",
  databaseURL: "https://securityapp-cc1b0.firebaseio.com",
  projectId: "securityapp-cc1b0",
  storageBucket: "securityapp-cc1b0.appspot.com",
  messagingSenderId: "545927855529",
  appId: "1:545927855529:web:e7e07f508c114a1eea58b8",
  measurementId: "G-E1LLT4TWN1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
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
