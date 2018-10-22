import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import Chat from '../screens/Chat.js';
import ChatWrapper from './ChatNavigator'
import SideDrawer from '../screens/SideDrawer.js'


export const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Chat: {
    	screen: ChatWrapper,
    },
    SideDrawer: {
      screen: SideDrawer,
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
//Overall Navigationsss
export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator/>;
  }
}