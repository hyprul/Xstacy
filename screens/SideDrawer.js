import React, { Component } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import { logout } from "../redux/actions.js";

class SideDrawer extends Component {
	render() {
		return (
			<View
				style={[
					styles.container,
					{ width: Dimensions.get("window").width * .5 }
				]}
			>
				<TouchableOpacity onPress={this.props.onLogout}>
					<View style={styles.drawerItem}>
						<Ionicons
							name="ios-log-out"
							size={30}
							color="#aaa"
							style={styles.drawerItemIcon}
						/>
						<Text>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		backgroundColor: "white",
		flex: 1
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#eee"
	},
	drawerItemIcon: {
		marginRight: 10
	}
});

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(logout())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SideDrawer);
