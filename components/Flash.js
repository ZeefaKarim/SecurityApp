import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Constants, Camera } from 'expo';
import * as Permissions from 'expo-permissions'
import Torch from 'react-native-torch';

export default class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      torchOn:false,
    }
  }
  // async componentWillMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasCameraPermission: status === 'granted' });
  // }
  performAction=()=>{
    let torchOn = this.state;
    //Torch.switchState(true);
    this.state.torchOn=!this.state.torchOn;
    if(this.state.torchOn)
    {
      alert('Flashlight OFF');
    }
    else{
      alert('Flashlight ON');
    }
    //this.setState({torchOn:!torchOn})
    
  }
  render(){
    const { hasCameraPermission } = this.state;
    return (
      <View style={styles.container}>
        {/*hasCameraPermission &&
          <Camera
            style={{ flex: 1, width: '100%', height: '100%', alignSelf: 'stretch' }}
            type={this.props.cameraType}
            ref={ref => {
              this.camera = ref;
            }}
            flashMode='torch'
          />
          */}
          <Text>Flash Page</Text> 
          <TouchableOpacity onPress={()=>this.performAction()}>
            <Text>PRESS ME</Text>
          </TouchableOpacity>

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
  }
});
