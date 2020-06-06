import * as React from 'react';
import { Button, View, Text,Tab,Navigator,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
import CreateSchedule from './CreateSchedule';
import ReportsLogs from './ReportsLogs';
import Panic from './Panic'


function Home({navigation,route}) {
    
    panicPressed=()=>{
        //alert('Panic Pressed');
        <Panic/>
    }
        
        const user_name = route.params.username;
        return (
            <View style={styles.container}>
              {<Text>Hello {user_name}</Text>}
              <View style={styles.gridContainer}>
                <View style={styles.rowContainer}>
                    
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('ClockInOut',{username:user_name,age:16})}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/timeClock.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('CreateSchedule',{username:user_name,age:16})}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/createSchedule.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>



                <View style={styles.rowContainer}>
                    
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('ClockInOut',{username:user_name,age:16})}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/flashlight.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Reports',{username:user_name})}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/reports.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>



                <View style={styles.rowContainer}>
                    
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{panicPressed()}}>
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
  const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
     gridContainer:{
          flex:1,
          margin:5,

      },
      rowContainer:{
          flexDirection: "row",
      },
      image:{
            width:150,
            height:150,
      }

  });

  export default Home