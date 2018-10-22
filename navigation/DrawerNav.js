import React, { Component } from "react";
import { AppRegistry, Dimensions } from "react-native";
import { DrawerNavigator } from "react-navigation";

import SideDrawer from "../screens/SideDrawer.js";
import RootStackNavigator from "./RootNavigator.js";

const drawerNav = DrawerNavigator(
	{
		Item1: {
			screen: RootStackNavigator
		}
	},
	{
		contentComponent: SideDrawer,
		drawerWidth: Dimensions.get("window").width - 120
	}
);

AppRegistry.registerComponent("Drawer", () => drawerNav);
