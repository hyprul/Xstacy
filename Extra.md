https://exp.host/@hyprul/Tinder

import React from 'react';
import { View, Image, Text } from 'react-native';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1539424675410-513ddd709ebd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38743f957e78c011280a3aaf213c720f&auto=format&fit=crop&w=1234&q=80' }}
        style={{ flex: 1 }}
      />
      <View style={styles.buttonsViewStyle}>
        <View style={[styles.buttonStyle, {backgroundColor: '#2c74e8'}]}>
          <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
        </View>
        <View style={[styles.buttonStyle, {backgroundColor: '#db5b4a'}]}>
          <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center',}}><Text style={{paddingTop: 25, color: '#fff'}}>Agree to terms and conditions</Text></View>
      </View>
    </View>
  );
};

const styles = {
  buttonsViewStyle: {
    position: 'absolute',
    width: '70%',
    left: '15%',
    top: '65%',
    height: 175,
    justifyContent: 'space-between'
  },
  buttonStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  }
};

export default Login;



MAPPPPPP

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        customMapStyle={MapStyles}
        showsUserLocation={true}
        region={this.state.region}
      >
        <MapView.Marker coordinate={matchLoc}>
          <Image
            style={styles.marker}
            source={require("../assets/tinder-marker.png")}
          />
        </MapView.Marker>
      </MapView>




PROFILE ROW IMAGES
            <View style={styles.imgRow}>
              {this.props.user.images.map((uri, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={this.deleteImage.bind({ self: this, key: key })}
                  >
                    <Image style={styles.img} source={{ uri: uri }} />
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                style={[
                  styles.img,
                  styles.center,
                  { backgroundColor: "transparent" }
                ]}
                onPress={this.addImage.bind(this)}
              >
                <Ionicons name="ios-add" size={75} style={styles.color} />
              </TouchableOpacity>
            </View>