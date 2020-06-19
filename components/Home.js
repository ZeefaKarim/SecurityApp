import Torch from 'react-native-torch';
import React, { Component } from 'react';
import {View, Text, Tab, Navigator, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator,n HeaderHeightContext } from '@react-navigation/stack';
// import CreateSchedule from './CreateSchedule';
// import ReportsLogs from './ReportsLogs';
 import Panic from './Panic'

export default class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isTorchOn: false,       
        };
    }
    // panicPressed = () => {
    //     new Panic().panicPressed();
    // }
    // flashPressed = () => {
    //     alert('Flash Pressed');
    //     const { isTorchOn } = this.state;
    //     Torch.switchState(!isTorchOn);
    //     this.setState({ isTorchOn: !isTorchOn });
    // }
    //const user_name = route.params.username;
    render() {
        const params = this.props.route.params;
        const user_name = params.username
        return (
            <View style={styles.container}>
             <Button style={styles.SignOut} full rounded success onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text style={styles.signOutText} >Sign Out</Text>
                </Button>
                <Text style={styles.welcome}>Hello {user_name}</Text>
                <View style={styles.gridContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.LeftItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ClockInOut', { username: user_name, age: 16 }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/timeClock.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.RightItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ViewSchedule', { username: user_name}) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/createSchedule.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomRowContainer}>
                        <View style={styles.LeftItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Panic', { username: user_name}) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/panic.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.RightItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Reports', { username: user_name }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/reports.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAE0E2',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    gridContainer: {
        flex: 1,
        margin: 5,
        marginTop:25,
    },
    SignOut:{
        borderWidth:1,
        marginTop:20,
        borderRadius:5,
        backgroundColor: '#0a2f91',
        alignSelf:"flex-end",
        marginRight:10,
        width:70,
    },
    signOutText:{
        color:'#fff',
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
    },

    welcome:{
        fontSize:24,
        borderBottomWidth:1,
        marginTop:20,
        fontWeight:'bold'
    },
    rowContainer: {
        flexDirection: "row",
        marginTop:40,
    },
    image: {
        width: 150,
        height: 150,
        borderWidth:2,
        borderColor:'#000',
        borderRadius:10,
    },
    LeftItem:{
        marginLeft:0,
    },
    RightItem:{
        marginLeft:40,
    },
    bottomRowContainer:{
        flexDirection: "row",
        marginTop:100,
        marginBottom:0,
    }
});