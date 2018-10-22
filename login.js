import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';

import Wifi from './login_images/Wifi.png'
import Battery from './login_images/Battery.png'
import Migo_logo from './login_images/Migo_logo.png'
import Rectangle3Copy2 from './login_images/Rectangle3Copy2.png'
import Path from './login_images/Path.png'
import Rectangle3Copy2_13 from './login_images/Rectangle3Copy2_13.png'
import Path_15 from './login_images/Path_15.png'
import iPhoneXHomeIndicatorHomeIndicatorOnDark from './login_images/iPhoneXHomeIndicatorHomeIndicatorOnDark.png'

export default class Login extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: 'url(#linearGradient-1)'}}>
        <View style={styles.bgwhite}>
          <View style={styles.iPhoneXStatusBarsStatusBarBlack}>
            <View style={styles.iPhoneXStatusBarsStatusBarBlack_18}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iPhoneXOverridesTimeBlack}>
                  <Text style={styles.Time}>
                    <Text>9:4</Text>{'\n'}
                    <Text>1</Text>{'\n'}
                  </Text>
                </View>
                <Image source={Wifi} style={styles.Wifi} />
                <Image source={Battery} style={styles.Battery} />
              </View>
            </View>
          </View>
          <Image source={Migo_logo} style={styles.Migo_logo} />
          <View style={styles.facebook}>
            <ImageBackground source={Rectangle3Copy2} style={styles.Rectangle3Copy2}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Path} style={styles.Path} />
                <Text style={styles.ConnectwithFaceboo}>Connect with Facebook</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.Google}>
            <ImageBackground source={Rectangle3Copy2_13} style={styles.Rectangle3Copy2_13}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Path_15} style={styles.Path_15} />
                <Text style={styles.ConnectwithGoogle}>Connect with Google</Text>
              </View>
            </ImageBackground>
          </View>
          <Text style={styles.Byclickingstarty}>
            <Text>By clicking start, you agree to our </Text>{'\n'}
            <Text>Terms and Conditions </Text>{'\n'}
          </Text>
          <Image source={iPhoneXHomeIndicatorHomeIndicatorOnDark} style={styles.iPhoneXHomeIndicatorHomeIndicatorOnDark} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgwhite: {
    backgroundColor: '#FFFFFF',
    paddingTop: 34,
    paddingBottom: 13
  },
  iPhoneXStatusBarsStatusBarBlack: {
    alignSelf: 'flex-start',
    marginLeft: 140,
    width: 320,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iPhoneXStatusBarsStatusBarBlack_18: {
    width: 320,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iPhoneXOverridesTimeBlack: {
    width: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Time: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000'
  },
  Wifi: {

  },
  Battery: {

  },
  Migo_logo: {
    alignSelf: 'flex-start',
    marginLeft: 217,
    marginTop: 103
  },
  facebook: {
    alignSelf: 'flex-start',
    marginLeft: 137,
    marginTop: 383,
    width: 316,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Rectangle3Copy2: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Path: {

  },
  ConnectwithFaceboo: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Google: {
    alignSelf: 'flex-start',
    marginLeft: 137,
    marginTop: 20,
    width: 316,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Rectangle3Copy2_13: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Path_15: {

  },
  ConnectwithGoogle: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Byclickingstarty: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 192,
    marginTop: 53,
    textAlign: 'left'
  },
  iPhoneXHomeIndicatorHomeIndicatorOnDark: {
    alignSelf: 'flex-start',
    marginLeft: 228,
    marginTop: 34
  }
})
