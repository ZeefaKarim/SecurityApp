import Torch from 'react-native-torch';
import React, { Component } from 'react';
import { Button, View, Text, Tab, Navigator, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
// import CreateSchedule from './CreateSchedule';
// import ReportsLogs from './ReportsLogs';
// import Panic from './Panic'


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTorchOn: false,
        };
    }

    panicPressed = () => {
        alert('Panic Pressed');

    }

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
                {<Text>Hello {user_name}</Text>}
                <View style={styles.gridContainer}>
                    <View style={styles.rowContainer}>

                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ClockInOut', { username: user_name, age: 16 }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/timeClock.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CreateSchedule', { username: user_name, age: 16 }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/createSchedule.jpg')}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={styles.rowContainer}>

                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Flash")}}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/flashlight.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Reports', { username: user_name }) }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/reports.png')}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={styles.rowContainer}>

                        <View style={styles.item}>
                            <TouchableOpacity onPress={this.panicPressed}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/panic.png')}
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