import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default class RegisterUser extends React.Component {
    render(){
      return (
        <KeyboardAwareScrollView enableOnAndroid  style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput style={styles.textInput} placeholder="Enter name"/>
                <TextInput style={styles.textInput} placeholder="Enter email"/>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter password"/>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Confirm password"/>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
      );
    }  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0A79DF',
    paddingLeft:60,
    paddingRight:60,
  },
  formContainer:{
    marginTop:70,
  },
  header:{
    fontSize:24,
    color:'#fff',
    fontWeight:'bold',
    paddingBottom:50,
    textAlign: "center",
    borderBottomColor:'#ffff',
  },
  textInput:{
      alignSelf:'stretch',
      height:40,
      borderBottomColor:'#ffff',
      borderBottomWidth:1,
      marginBottom:20,
  },
  loginButton:{
    backgroundColor: "#192A56",
    paddingVertical:15,
    borderRadius:5,
    marginTop:20,
    marginRight:30,
    marginLeft:30,
  },
  buttonText:{
      color:'#ffff',
      alignSelf:'center'
  }
});