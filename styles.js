import React from "react";
import { StyleSheet } from "react-native";
var Dimensions = require("Dimensions");
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

var styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	container: {
		flex: 1
	},
	chatcontainer: {
		backgroundColor: "#00171F"
	},
	color: {
		color: "#1C3041"
	},
	center: {
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	img: {
		width: 90,
		height: 90,
		borderRadius: 45,
		margin: 10,
		backgroundColor: "transparent"
	},
	imgRow: {
		flexWrap: "wrap",
		flexDirection: "row",
		padding: 15
	},
	textInput: {
		width: deviceWidth * 0.9,
		padding: 15,
		backgroundColor: "transparent",
		height: 50,
		fontSize: 15,
		color: "#AACCFF"
	},
	bold: {
		padding: 10,
		fontSize: 18,
		fontWeight: "bold"
	},
	button: {
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#fff",
		textAlign: "center",
		color: "#fff",
		padding: 15,
		margin: 15,
		fontSize: 18,
		fontWeight: "bold"
	},
	card: {
		width: deviceWidth * 0.9,
		height: deviceHeight * 0.6
	},
	cardDescription: {
		padding: 15,
		justifyContent: "flex-end",
		flex: 1
	},
	cardInfo: {
		backgroundColor: "#eee",
		borderRadius: 10,
		padding: 10
	},
	logo: {
		width: 100,
		height: 55,
		marginTop: 25
	},
	barlogo: {
		width: 55,
		height: 55
	},
	nav: {
		marginTop: 20
	},
	heart: {
		position: 'absolute',
		top: "85%",
		right:"15%"
	},
		noheart: {
		position: 'absolute',
		top: "85%",
		left: "15%"
	}
});

module.exports = styles;
