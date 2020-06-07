import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Constants, Camera } from 'expo';
import * as Permissions from 'expo-permissions'
export default class Flash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
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
      </View>
      <Text>Flah Page</Text>
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
