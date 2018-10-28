import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	View,
	Dimensions,
	Image,
	Text
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapStyles from "./MapStyles/MapStyles.json";
let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Geohash from "latlon-geohash";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";

const homePlace = {
	description: "International",
	geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
	description: "Domestic",
	geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

export default class AppDate extends Component {
	constructor() {
		super();
		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			},

			choosen: {
				latitude: homePlace.geometry.location.lat,
				longitude: homePlace.geometry.location.lng
			}
		};
	}

	GooglePlacesInput = () => {
		return (
			<GooglePlacesAutocomplete
				placeholder="Where to go?"
				minLength={2} // minimum length of text to search
				autoFocus={true}
				returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
				listViewDisplayed={false} // true/false/undefined
				fetchDetails={true}
				renderDescription={row => row.description} // custom description render
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(details.geometry.location);
					console.log(details.geometry.location.lat);
					console.log(details.geometry.location.lng);
					this.setState({
						choosen: {
							latidude: 29.7221004,
							longitude: -95.389614
						}
					});
					let matchLoc = {
						latitude: 29.7221004,
						longitude: -95.389614
					};
				}}
				getDefaultValue={() => ""}
				query={{
					// available options: https://developers.google.com/places/web-service/autocomplete
					key: "AIzaSyDcZEKmvQop1c53ABk5fDynJGURTxRfXJg",
					language: "en", // language of the results
					types: "establishment" // default: 'geocode'
				}}
				styles={searchInputStyle}
				currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
				currentLocationLabel="Current location"
				nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
				GoogleReverseGeocodingQuery={
					{
						// available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
					}
				}
				GooglePlacesSearchQuery={{
					// available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
					rankby: "distance",
					types: "restaurant"
				}}
				// filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
				predefinedPlaces={[homePlace, workPlace]}
				debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
			/>
		);
	};

	componentDidMount() {
		console.log("--------------------------------------------");
		console.log("Matched Other Party's Details");
		console.log(this.props.navigation.state.params.user);
		console.log(
			Geohash.decode(this.props.navigation.state.params.user.geocode).lat
		);

		// workPlace.description = this.props.navigation.state.params.user.name
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
			<View>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={tempstyles.container}
					customMapStyle={MapStyles}
					showsUserLocation={true}
					region={this.state.region}
				>
					<MapView.Marker coordinate={matchLoc}>
						<Image
							style={tempstyles.marker}
							source={require("../assets/tinder-marker.png")}
						/>
					</MapView.Marker>

					<MapView.Marker coordinate={this.state.choosen}>
						<MaterialIcons
							name="location-on"
							size={25}
							color="#fff"
						/>
					</MapView.Marker>
				</MapView>

				<View style={styles.searchBox}>{this.GooglePlacesInput()}</View>
			</View>
		);
	}
}
const tempstyles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%"
	},
	marker: {
		width: 40,
		height: 40
	},
	search: {
		paddingTop: 50
	}
});

const searchInputStyle = {
	container: {
		backgroundColor: "#2F4550",
		width: width * 0.95,
		marginLeft: 10,
		marginTop: 0,
		marginBottom: 0,
		opacity: 0.9,
		borderRadius: 8
	},
	description: {
		fontWeight: "bold",
		color: "#F7F4EA",
		borderTopWidth: 0,
		borderBottomWidth: 0,
		opacity: 0.9
	},
	predefinedPlacesDescription: {
		color: "#fff"
	},
	textInputContainer: {
		height: 60,
		backgroundColor: "transparent",
		borderTopWidth: 0,
		borderWidth: 0
	},
	textInput: {
		height: 40,
		fontSize: 16,
		fontWeight: "bold",
		backgroundColor: "#3C787E",
		color: "#fff"
	},
	poweredContainer: {
		backgroundColor: "#93A3B1",
		opacity: 1
	},

	listView: {}
};

const styles = StyleSheet.create({
	searchBox: {
		top: 40,
		position: "absolute",
		flex: 1,
		justifyContent: "center"
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
