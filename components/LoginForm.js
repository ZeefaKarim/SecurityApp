import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,StatusBar } from 'react-native';
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

function LoginForm({navigation}) 
{ 
      return (
        <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            />
            <View>
                <Icon 
                name={'ios-person'}
                size={28}
                color={'rgba(255,255,255,0.7)'}
                style= {styles.inputIcon}
                />
                <TextInput
                placeholder={"Email Id"}
                placeholderTextColor = 'rgba(25,255,255,0.7)'
                keyboardType="email-address"
                //selectionColor={'black'}
                //returnKeyType= "next"
                autoCapitalize="none"
                autoCorrect={false}
                //onSubmitEditing= {()=> this.passwordInput.focus()}
                style={styles.input}
                />
            </View>
            
            <View>
                <Icon 
                    name={'ios-lock'}
                    size={28}
                    color={'rgba(255,255,255,0.7)'}
                    style= {styles.inputIcon}
                />
                <TextInput
                    placeholder={"password!!!"}
                    //secureTextEntry= {this.state.showPass}
                    placeholderTextColor = 'rgba(25,255,255,0.7)'
                    //returnKeyType='go'
                   // ref={(input)=> this.passwordInput = input}
                    style={styles.input}
                />
        
            </View>

            <TouchableOpacity style={styles.loginButtonContainer} onPress={ () =>{
                navigation.navigate('Home')
            } }>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
      );
    }  


const styles = StyleSheet.create({
  container: {
    
  },
  input:{
      height:40,
      backgroundColor: 'rgba(25,255,255,0.35)',
      marginBottom: 10,
      color: 'rgba(255,255,255,0.7)',
      paddingHorizontal:35
  },
  inputIcon:{
    position:'absolute',
    top:8,
    left:5
  },
  eyeBtn:{
    position:'absolute',
    right:10,
    top: 5
  },
  loginButtonContainer:{
    backgroundColor: "#2890b9",
    paddingVertical:15,
    borderRadius:5,
    marginTop:10
  },
  loginButtonText:{
      textAlign:"center",
      color: "#FFF",
      fontWeight: "bold"
  }
  
});

export default LoginForm