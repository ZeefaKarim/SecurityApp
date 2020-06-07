import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
//import LoginForm from './LoginForm.js'
import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../assets/background.png'
import logo from '../assets/logo1.png'
import Home from './Home.js';

const {width:Width} = Dimensions.get('window')

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            showPass: true,
            press:false,
            isAdmin: false
        };
    }
    showPass = () =>{
        if(this.state.press === false){
            this.setState({showPass:false, press:true})
        }
        else{
            this.setState({showPass:true, press:false})
        }
    }
    validation=() =>{
        const{
            username,password
        } = this.state
        if(username=='' || password=='')
        {
            alert('Username or password cannot be empty');
            return false;
        }
        else if(username=='admin' && password=='admin'){
            console.log('validation successful')
            this.state.isAdmin=true;
            return true;
        }
        else{
            return true;
        }
    }
    navigateToHome=()=>{
        if(this.validation())
        {
            console.log(this.state.admin);
            if(this.state.isAdmin){
                
                this.props.navigation.navigate("AdminHome",{username:this.state.username});
            }
            else{
                this.props.navigation.navigate("Home",{username:this.state.username});
            }
            
        }
    }
    render(){
        const { navigate } = this.props.navigation;  
        //const [postText, setPostText] = React.useState('');
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
                    //value = {postText}
                    //onChangeText={setPostText}
                    onChangeText={(value) => this.setState({username:value})}
                    placeholder={"Email"}
                    placeholderTextColor = 'rgba(25,255,255,0.7)'
                    keyboardType="email-address"
                    //selectionColor={'black'}
                    //returnKeyType= "next"
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

                        //returnKeyType='go'
                       // ref={(input)=> this.passwordInput = input}
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