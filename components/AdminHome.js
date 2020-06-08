import Torch from 'react-native-torch';
import React, { Component } from 'react';
import { Button, View, Text, Tab, Navigator, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
// import CreateSchedule from './CreateSchedule';
// import ReportsLogs from './ReportsLogs';
 import Panic from './Panic'

export default class AdminHome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {            
        };
    }
    render() {
        const params = this.props.route.params;
        const user_name = params.username
        return (
            <View style={styles.container}>
                {<Text style={styles.welcome}>Welcome {user_name}</Text>}
                <View style={styles.gridContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.LeftItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterUser', { username: user_name, age: 16 }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/registerUser.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.RightItem}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate("ViewReports")}}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/viewReports.png')}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.bottomRowContainer}>
                        <View style={styles.LeftItem}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CreateSchedule', { username: user_name }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/createSchedule.jpg')}
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
        alignSelf:'center'
    }
});

  //export default Home