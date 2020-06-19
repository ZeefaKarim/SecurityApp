import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform,TextInput} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import { Label } from 'native-base';
//import { Dropdown } from 'react-native-material-dropdown';


export default class RegisterUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newPassword: "",
      newConfirmPassword: "",
      newPhoneNumber: "",
     // isAdmin: false
    }
  }

  clearFields = (fname,lname,phoneNumber,email,password,confirmPassword) =>{
    this.refs[fname].setNativeProps({text: ''});
    this.refs[lname].setNativeProps({text: ''});
    this.refs[phoneNumber].setNativeProps({text: ''});
    this.refs[email].setNativeProps({text: ''});
    this.refs[password].setNativeProps({text: ''});
    this.refs[confirmPassword].setNativeProps({text: ''});
  }

  inputValidation = (fname,lname,phoneNumber,email,password,confirmPassword) => {
    console.log("Name: ", this.state.newFirstName);
    console.log("Name: ", this.state.newLastName);
    console.log("Email: ", this.state.newEmail);
    console.log("newpasswoprd: ", this.state.newPassword);
    console.log("confirm passwprd: ", this.state.newConfirmPassword);
    //console.log("isAdmin status: ", this.state.isAdmin);
    console.log("phone number: ", this.state.phoneNumber);



    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regPhone = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

    if (this.state.newFirstName == "" || this.state.newLastName == "" || this.state.newEmail == "" || this.state.newPassword == "" || this.state.newConfirmPassword == "" || this.state.newPhoneNumber == "") {
      alert('all fields are mandatory');
    }
    else if(this.state.newFirstName.length<2 || this.state.newLastName.length<2){
      alert('Minimum 2 charecters for both first and last name');
    }
    else if (this.state.newPassword != this.state.newConfirmPassword) {
      alert('both password shoould be same');
    }
    else if (regEmail.test(this.state.newEmail) === false) {
      alert('Email invalid');
    }
    else if (this.state.newPassword.length < 5) {
      alert('Password length should be min 5 charecters')
    }
    else if(regPhone.test(this.state.newPhoneNumber) === false){
      alert('Phone number invalid');
    }
    else {
      var formattedPhoneNumber = this.state.newPhoneNumber.replace(regPhone, "($1) $2-$3");
      console.log(formattedPhoneNumber);
      //this.setState({phoneNumber = formattedPhoneNumber});
      this.state.newPhoneNumber = formattedPhoneNumber;
      alert('regiter is pressed after succesful validations');
      this.clearFields('fname','lname','phoneNumber','email','password','confirmPassword');
      
    }

  }

  render() {
    return (
      <KeyboardAwareScrollView enableOnAndroid style={styles.container}>
        <View style={styles.formContainer}>
          {/*<Text style={styles.header}>Register a Guard</Text>*/}
          <TextInput
            style={styles.textInput}
            placeholder="Enter First Name"
            ref={'fname'}
            autoCompleteType = "off"
            onChangeText={(value) => this.setState({ newFirstName: value })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Last Name"
            ref={'lname'}
            autoCompleteType = "off"
            onChangeText={(value) => this.setState({ newLastName: value })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Phone number"
            ref={'phoneNumber'}
            keyboardType = "number-pad"
            onChangeText={(value) => this.setState({ newPhoneNumber: value })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            ref={'email'}
            onChangeText={(value) => this.setState({ newEmail: value })}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter Password (min 5 charechters)"
            ref={'password'}
            onChangeText={(value) => this.setState({ newPassword: value })}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm Password"
            ref={'confirmPassword'}
            onChangeText={(value) => this.setState({ newConfirmPassword: value })}
          />
          <TouchableOpacity style={styles.loginButton} 
            onPress={() => this.inputValidation('fname','lname','phoneNumber','email','password','confirmPassword')}>
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
    backgroundColor: '#0A79DF',
    paddingLeft: 60,
    paddingRight: 60,
  },
  formContainer: {
    marginTop: 70,
  },
  // header:{
  //   fontSize:24,
  //   color:'#fff',
  //   fontWeight:'bold',
  //   paddingBottom:50,
  //   textAlign: "center",
  //   borderBottomColor:'#ffff',
  // },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    borderBottomColor: '#ffff',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#192A56",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
  },
  buttonText: {
    color: '#ffff',
    alignSelf: 'center'
  }
});