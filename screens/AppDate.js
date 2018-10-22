import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Dimensions, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapStyles from "./MapStyles/MapStyles.json";
let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Geohash from "latlon-geohash";

export default class AppDate extends Component {
	constructor() {
		super();
		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		};
	}
	componentDidMount() {
		console.log("--------------------------------------------");
		console.log("Matched Other Party's Details");
		console.log(this.props.navigation.state.params.user);
		console.log(
			Geohash.decode(this.props.navigation.state.params.user.geocode).lat
		);

		console.log("--------------------------------------------");
		navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA
					}
				});
			},
			error => console.log(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		this.watchID = navigator.geolocation.watchPosition(position => {
			this.setState({
				region: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				}
			});
		});
	}
	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	render() {
		let matchLoc = {
			latitude: Geohash.decode(
				this.props.navigation.state.params.user.geocode
			).lat,
			longitude: Geohash.decode(
				this.props.navigation.state.params.user.geocode
			).lon
		}; //NOT EXACT, DECODED FROM GEOCODE, SERVES PURPOSE
		return (
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
		);
	}
}
const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%"
	},
	marker: {
		width: 40,
		height: 40
	}
});
/* onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }*/
// import React, { Component } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import DarkStyle from "./MapStyles/Dark.json";

// let { width, height } = Dimensions.get("window");
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// export class AppDate extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			region: {
// 				latitude: LATITUDE,
// 				longitude: LONGITUDE,
// 				latitudeDelta: LATITUDE_DELTA,
// 				longitudeDelta: LONGITUDE_DELTA
// 			}
// 		};
// 	}

// 	componentDidMount() {
// 		navigator.geolocation.getCurrentPosition(
// 			position => {
// 				this.setState({
// 					region: {
// 						latitude: position.coords.latitude,
// 						longitude: position.coords.longitude,
// 						latitudeDelta: LATITUDE_DELTA,
// 						longitudeDelta: LONGITUDE_DELTA
// 					}
// 				});
// 			},
// 			error => console.log(error.message),
// 			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
// 		);
// 		this.watchID = navigator.geolocation.watchPosition(position => {
// 			this.setState({
// 				region: {
// 					latitude: position.coords.latitude,
// 					longitude: position.coords.longitude,
// 					latitudeDelta: LATITUDE_DELTA,
// 					longitudeDelta: LONGITUDE_DELTA
// 				}
// 			});
// 		});
// 	}
// 	componentWillUnmount() {
// 		navigator.geolocation.clearWatch(this.watchID);
// 	}

// 	render() {
// 		return (
// 			<View style={{ flex: 1 }}>
// 				<MapView
// 					provider={PROVIDER_GOOGLE}
// 					style={styles.container}
// 					customMapStyle={DarkStyle}
// 					showsUserLocation={true}
// 					region={this.state.region}
// 					onRegionChange={region => this.setState({ region })}
// 					onRegionChangeComplete={region => this.setState({ region })}
// 				>
// 					<MapView.Marker coordinate={this.state.region} />
// 				</MapView>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		height: "100%",
// 		width: "100%"
// 	}
// });

// export default AppDate;

// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Constants, MapView } from 'expo';

// export default class App extends Component {
//   state = {
//     mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
//   };

//   _handleMapRegionChange = mapRegion => {
//     this.setState({ mapRegion });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={{ alignSelf: 'stretch', height: 350 }}
//           region={this.state.mapRegion}
//           provider={MapView.PROVIDER_GOOGLE}
//           onRegionChange={this._handleMapRegionChange}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   }
// });
