import React, { Component } from "react";
import Chat from "../screens/Chat.js";
import AppDate from "../screens/AppDate.js";
import { createBottomTabNavigator, createTabNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles";
import { Keyboard, Image, TouchableOpacity, View, Text } from "react-native";
import TabBarComponent from "./TabBarComponent.js";

// function keyboardDidShow(){
//   alert("hello world")
// }

// import React, { Component } from 'react';

// export class ChatNavigator extends Component {

//   state={
//     keyboardShow: false
//   }
//   render() {
//     return (
//       <div><ChatNavigator /></div>
//     );
//   }
// }

const ChatNavigator = createTabNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarVisible: true,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            style={styles.nav}
            color={"#FFFFFF"}
            name={focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"}
            size={40}
          />
        )
      }
    },

    Date: {
      screen: AppDate,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarVisible: true,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialCommunityIcons
              style={styles.nav}
              name="ring"
              size={40}
              color="#00FAFF"
            />
          ) : (
            <MaterialCommunityIcons
              style={styles.nav}
              name="ring"
              size={40}
              color="#C0C0C0"
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
    initialRouteName: "Chat",
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
export default ChatNavigator;
// export class ChatWrapper extends Component {
//   render() {
//     return createBottomTabNavigator(
//       {
//         Chat: {
//           screen: Chat,
//           navigationOptions: {
//             tabBarLabel: " ",
//             tabBarVisible: true,
//             tabBarIcon: ({ focused }) => (
//               <Ionicons
//                 style={styles.nav}
//                 color={"#FFFFFF"}
//                 name={focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"}
//                 size={40}
//               />
//             )
//           }
//         }
//       },
//       {
//         navigationOptions: {
//           header: null
//         },
//         tabBarPosition: "bottom",
//         initialRouteName: "Chat",
//         animationEnabled: true,
//         swipeEnabled: false,
//         tabBarOptions: {
//           style: {
//             height: 70,
//             backgroundColor: "#1C3041"
//           }
//         }
//       }
//     );
//   }
// }

// export class ChatNavigator extends Component {
//   render() {
//     return (
//       createBottomTabNavigator(
//   {
//     Chat: {
//       screen: Chat,
//       navigationOptions: {
//         tabBarLabel: " ",
//         tabBarVisible: true,
//         tabBarIcon: ({ focused }) => (
//           <Ionicons
//             style={styles.nav}
//             color={"#FFFFFF"}
//             name={focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"}
//             size={40}
//           />
//         )
//       }
//     }
//   },
//   {
//     navigationOptions: {
//       header: null
//     },
//     tabBarPosition: "bottom",
//     initialRouteName: "Chat",
//     animationEnabled: true,
//     swipeEnabled: false,
//     tabBarOptions: {
//       style: {
//         height: 70,
//         backgroundColor: "#1C3041"
//       }
//     }
//   }
// )
//     );
//   }
// }

// const MainNavigator = createBottomTabNavigator({
//   welcome: { screen: WelcomeScreen },
//   auth: { screen: AuthScreen },
// });

//       screen: Chat,
//       navigationOptions: {
//         tabBarLabel: " ",
//         tabBarVisible: true,
//         tabBarIcon: ({ focused }) => (
//           <Ionicons
//             style={styles.nav}
//             color={"#FFFFFF"}
//             name={focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"}
//             size={40}
//           />
//         )
//       }
//     }
//   },
//   {
//     navigationOptions: {
//       header: null
//     },
//     tabBarPosition: "bottom",
//     initialRouteName: "Chat",
//     animationEnabled: true,
//     swipeEnabled: false,
//     tabBarOptions: {
//       style: {
//         height: 70,
//         backgroundColor: "#1C3041"
//       }
//     }
//   }
// );

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
