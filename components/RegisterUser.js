import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as firebase from "firebase";

export default class RegisterUser extends React.Component {
    
  constructor(props){
    super(props);
    this.state={
      newName:"",
      newEmail:"",
      newpassword:"",
      newconfirmpassword:"",
      newphoneNumber:""
    }
  }

  componentDidMount(){
    //firebase.aut
  }

  registerNow = (email,password,name,phoneNumber)=>{
    firebase.auth()
    .createUserWithEmailAndPassword(email,password)
    .then(authenticate => {
      authenticate.user.updateProfile({
        displayName: name
      })
      .then(()=>{
        this.props.navigation.replace("Home",{username:this.state.newName});
      })
    })
    .catch(error =>{
      alert(error.message)
    })
  };

  inputValidation = () =>{
    console.log ("Name: ", this.state.newName);
    console.log ("Email: ", this.state.newEmail);
    console.log ("newpasswoprd: ", this.state.newpassword);
    console.log ("confirm passwprd: ", this.state.newconfirmpassword);
    console.log ("Phone Number: ", this.state.newphoneNumber);
    
    
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let regPhoneNumber = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    
    if(this.state.newName == "" || this.state.newEmail == "" || this.state.newpassword == "" || this.state.newconfirmpassword == ""){
      alert('all fields are mandatory');
    }
    else if (this.state.newpassword != this.state.newconfirmpassword){
      alert('both password shoould be same');
    }
    else if(regEmail.test(this.state.newEmail) === false){
      alert('Email invalid');      
    }
    else if(regPhoneNumber.test(this.state.newphoneNumber) === false){
      alert('Phone Number invalid');      
    }
    else if(this.state.newpassword.length < 5){
      alert('Password length should be min 5 charecters')
    }
    else{
      console.log('regiter is pressed after succesful validations');
      this.registerNow(this.state.newEmail,this.state.newpassword,this.state.newName,this.state.newphoneNumber);
    }

  }
    
    render(){
      return (
        <KeyboardAwareScrollView enableOnAndroid  style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.header}>Register a Guard</Text>
                <TextInput
                 style={styles.textInput} 
                 placeholder="Enter name"
                 onChangeText={(value) => this.setState({newName:value})}
                />
                <TextInput 
                  style={styles.textInput} 
                  placeholder="Enter email"
                  onChangeText={(value) => this.setState({newEmail:value})}
                />
                <TextInput 
                  style={styles.textInput} 
                  secureTextEntry={true} 
                  placeholder="Enter password"
                  onChangeText={(value) => this.setState({newpassword:value})}
                  />
                <TextInput 
                  style={styles.textInput} 
                  secureTextEntry={true} 
                  placeholder="Confirm password"
                  onChangeText={(value) => this.setState({newconfirmpassword:value})}
                  />

                <TextInput 
                style={styles.textInput}  
                placeholder="Phone Number"
                onChangeText={(value) => this.setState({newphoneNumber:value})}
                />    

                <TouchableOpacity style={styles.loginButton} onPress={()=> this.inputValidation()}>
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