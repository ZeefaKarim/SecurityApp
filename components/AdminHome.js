import Torch from 'react-native-torch';
import React, { Component } from 'react';
import { Button, View, Text, Tab, Navigator, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
// import CreateSchedule from './CreateSchedule';
// import ReportsLogs from './ReportsLogs';
 import Panic from './Panic'

export default class Home extends Component {
    
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
                {<Text>Hello {user_name}</Text>}
                <View style={styles.gridContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterUser', { username: user_name, age: 16 }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/registerUser.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate("ViewReports")}}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/viewReports.png')}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CreateSchedule', { username: user_name }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/createSchedule.png')}
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridContainer: {
        flex: 1,
        margin: 5,

    },
    rowContainer: {
        flexDirection: "row",
    },
    image: {
        width: 150,
        height: 150,
    }

});

  //export default Home