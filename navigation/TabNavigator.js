import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Matches from "../screens/Matches";
import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";
import { Image, TouchableOpacity } from "react-native";

// const MainNavigator = createBottomTabNavigator({
//   welcome: { screen: WelcomeScreen },
//   auth: { screen: AuthScreen },
// });

const TabNavigator = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            style={styles.nav}
            color={"#FFFFFF"}
            name={focused ? "ios-person" : "ios-person-outline"}
            size={40}
          />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.logo}
            source={require("../assets/tinder-logo.png")}
          />
        )
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            style={styles.nav}
            color={"#FFFFFF"}  
            name={focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"}
            size={40}
          />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: "bottom",
    initialRouteName: "Home",
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: {

        height: 70,
        backgroundColor: "#1C3041"
      }
    }
  }
);

export default TabNavigator;
// import React from 'react';
// import Home from '../screens/Home';
// import Profile from '../screens/Profile';
// import Matches from '../screens/Matches';
// import { createMaterialTopTabNavigator } from 'react-navigation';

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarLabel: 'Profile',
//       },
//     },
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//       }
//     },
//     Matches: {
//       screen: Matches,
//       navigationOptions: {
//         tabBarLabel: 'Matches',
//       },
//     },
//   },
//   {
//     navigationOptions: {
//       header: null
//     },
//     tabBarPosition: 'top',
//     initialRouteName: 'Home',
//     animationEnabled: true,
//     swipeEnabled: true,
//     tabBarOptions: {
//       style: {
//         height: 50,
//         backgroundColor: '#fff',
//       },
//     }
//   }
// );

//  export default TabNavigator
