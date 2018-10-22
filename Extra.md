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
