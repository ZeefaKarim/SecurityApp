import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
//import LoginForm from './LoginForm.js'
import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../assets/background.png'
import logo from '../assets/logo1.png'
import Home from './Home.js';

const {width:Width} = Dimensions.get('window')

export default class Login extends Component {
    static navigationOptions={
        header:null
    }

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            showPass: true,
            press:false,
            isAdmin: false,
            user:{},
            userAuthenticated:false
        };
    }

      userAuthentication=async(username,password)=>{
            console.log('*************in userAuthentication fn***********************')
            await fetch("http://192.168.0.16:1234/users/login", {
             method: "POST",
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               email: username,
               password: password,
             })
           })
           .then((response) => response.json())
           .then((responseData) => {
            // console.log("Response data ",responseData)
            // console.log("Before setting state of user",this.state.user)
            // console.log("Before setting state of userAuthenticated",this.state.userAuthenticated)
            console.log("Response message : ",responseData.message)
            if(responseData.message =="Incorrect Email or Password"){
                this.setState({userAuthenticated:false})
            }
            else{
                this.setState({user:responseData, userAuthenticated:true})
            }
             
            //  console.log("After setting the state")
            //  console.log("After setting state of user",this.state.user)
            //  console.log("After setting state of userAuthenticated",this.state.userAuthenticated)
           })
           .catch(error => console.log("Caught Error: ",error))
    }
    showPass = () =>{
        if(this.state.press === false){
            this.setState({showPass:false, press:true})
        }
        else{
            this.setState({showPass:true, press:false})
        }
    }
     validation=async() =>{
         console.log("in validation")
        const{
            username,password
        } = this.state
        if(username=='' || password=='')
        {
            alert('Username or password cannot be empty');
            return false;
        }
        else{
            console.log("in validation else..going in userAuthentication")
            await this.userAuthentication(username, password)
            console.log("value of userAuthenticated back in validation after setting state",this.state.userAuthenticated)
            if(this.state.userAuthenticated==true){
                return true
            }
            else{
                alert("Wrong email or password")
                return false
            }
        }
    }

    navigateToHome=async()=>{
        console.log("in navigateToHome...will go in validation fn");
        if(await this.validation())
        {
            console.log("Validation Success")
            console.log("USer : ",this.state.user)
            console.log("Message : ",this.state.user.message)
            this.state.user.is_admin ? this.props.navigation.navigate("AdminHome",{username:this.state.user.first_name}) : this.props.navigation.navigate("Home",{username:this.state.user.first_name});
            console.log("After navigating to homepage")
        }
    }
    render(){
        const { navigate } = this.props.navigation;  
        return (      
           <ImageBackground source={bgImage} style={styles.backgroundContainer}>    
                <View style={styles.mainView}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}  
                        />
                        <Text style={styles.logoText}>SECURITY APP</Text>
                    </View>
                    <View style={styles.formContainer}>
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
                            onChangeText={(value) => this.setState({username:value})}
                            placeholder={"Email"}
                            placeholderTextColor = 'rgba(25,255,255,0.7)'
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing= {()=> this.passwordInput.focus()}
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
                            placeholder={"password"}
                            secureTextEntry= {this.state.showPass}
                            placeholderTextColor = 'rgba(25,255,255,0.7)'
                            onChangeText={(value) => this.setState({password:value})}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.eyeBtn} onPress={this.showPass.bind(this)}>
                            <Icon
                                name={this.state.press == false ? 'ios-eye-off' : 'ios-eye' }
                                size={26}
                                color={'rgba(255,255,255,0.7)'}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={()=>this.navigateToHome()}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ImageBackground>    
);
}      
}
const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'  
    },
    mainView:{
       
    },
    logoContainer:{
        alignItems: "center",
        marginBottom:50,
        justifyContent: "center"
    },
    logo:{
        width:100,
        height:100
    },
    logoText:{
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        opacity: 0.6,
        fontSize : 20
    },
    formContainer:{
        width: Width -55,
        height:200,  
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

  //export default Login