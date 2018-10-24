import React from "react";
//import styles from "../styles";
import RootNavigator from "../navigation/RootNavigator";
import { connect } from "react-redux";
import { login } from "../redux/actions";
import * as firebase from "firebase";
import firebaseConfig from "../config/firebase.js";
firebase.initializeApp(firebaseConfig);
import { Font } from "expo";

import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

class Login extends React.Component {
  state = { fontLoaded: false };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.dispatch(login(user));
        console.log("We are authenticated now!" + JSON.stringify(user));
        console.log(this.props.loggedIn);
        console.log("HODOR HODOR HODOR HODOR HODOR HODOR");
      }
    });
    // this.props.dispatch(login("Amanda Fox"));
    // this.login();
  }

  async componentDidMount() {
    await Font.loadAsync({
      "SFUIDisplay-Semibold": require("../assets/fonts/SFDisplay-Semibold.otf"),
      "SFUIDisplay-Regular": require("../assets/fonts/SFDisplay-Regular.otf")
    });
    this.setState({ fontLoaded: true });
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "553946595038873",
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      // Build Firebase credential with the Facebook access token.
      const credential = await firebase.auth.FacebookAuthProvider.credential(
        token
      );

      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch(error => {
          // Handle Errors here.
          Alert.alert("Try Again");
        });
    }
  };

  render() {
    if (this.props.loggedIn) {
      return <RootNavigator />;
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1517957096399-3a4e3d34d95e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca5a7a4edd043c11e63320835a534624&auto=format&fit=crop&w=1534&q=100"
            }}
            style={styles.container}
          />
          <Image
            style={styles.logo}
            source={require("../assets/tinder-logo.png")}
          />
          <View style={styles.buttonsViewStyle}>
            <View
              style={[
                styles.buttonStyle,
                { backgroundColor: "#2672CB", marginBottom: 20 }
              ]}
            >
              <TouchableOpacity onPress={this.login.bind(this)}>
                <Image
                  style={styles.flogo}
                  source={require("../assets/facebook.png")}
                />
                <Text
                  style={
                    this.state.fontLoaded ? styles.bougietext : styles.text
                  }
                >
                  Connect with Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.buttonStyle, { backgroundColor: "#FC3850" }]}>
             
               <TouchableOpacity>
                <Image
                style={styles.glogo}
                source={require("../assets/google.png")}
              />
              <Text
                style={this.state.fontLoaded ? styles.bougietext : styles.text}
              >
                Connect with Google
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={
                  this.state.fontLoaded ? styles.conditonsText : styles.text
                }
              >
                By clicking start, you agree to our Terms and Conditions{" "}
              </Text>
            </View>
          </View>
        </View>
      );
      // return (
      //   <View style={[styles.container, styles.center]}>
      //     <Image source={require("../assets/tinder-logo.png")} />
      //     <TouchableOpacity onPress={this.login.bind(this)}>
      //       <Text style={styles.button}>Facebook Login</Text>
      //     </TouchableOpacity>
      //   </View>
      // );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flogo: {
    position: "absolute",
    top: "0%",
    right: "65%",
    justifyContent: 'center',
  },
    glogo: {
    position: "absolute",
    top: "0%",
    right: "60%",
     justifyContent: 'center'

  },
  logo: {
    flex: 1,
    position: "absolute",
    width: 125,
    height: 125,
    left: "33%",
    top: "10%"
  },
  text: {
    fontSize: 20,
    color: "#fff"
  },
  conditonsText: {
    fontFamily: "SFUIDisplay-Regular",
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 80
  },
  bougietext: {
    fontFamily: "SFUIDisplay-Semibold",
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: 1.5,
    textAlign: "center"
  },
  buttonsViewStyle: {
    position: "absolute",
    width: "80%",
    left: "10%",
    top: "65%",
    height: 200,
    justifyContent: "space-between"
  },
  buttonStyle: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  }
});

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Login);
