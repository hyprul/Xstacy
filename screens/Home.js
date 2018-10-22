import React from "react";
import styles from "../styles";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { getCards } from "../redux/actions";
import SwipeCards from "react-native-swipe-cards";
import Cards from "../components/Cards.js";
import NoCards from "../components/NoCards.js";
import { Header, Avatar, Icon } from "react-native-elements";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(getCards(this.props.user.geocode));
  }

  checkMatch(card) {
    firebase
      .database()
      .ref("cards/" + card.id + "/swipes/" + this.props.user.id)
      .once("value", snap => {
        if (snap.val() == true) {//FOUND MATCH, DO A NEW SCREEN IF WANTED, GIT
         
          var me = {
            id: this.props.user.id,
            photoUrl: this.props.user.images[0],
            name: this.props.user.name,
            geocode: this.props.user.geocode
          };
          var user = {
            id: card.id,
            photoUrl: card.photoUrl,
            name: card.name,
            geocode: this.props.user.geocode
          };
          firebase
            .database()
            .ref("cards/" + this.props.user.id + "/chats/" + card.id)
            .set({ user: user });
          firebase
            .database()
            .ref("cards/" + card.id + "/chats/" + this.props.user.id)
            .set({ user: me });
        }
      });
  }

  handleYup(card) {
    firebase
      .database()
      .ref("cards/" + this.props.user.id + "/swipes")
      .update({ [card.id]: true });
    this.checkMatch(card);
  }

  handleNope(card) {
    firebase
      .database()
      .ref("cards/" + this.props.user.id + "/swipes")
      .update({ [card.id]: false });
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1491036775913-3fbc5c455842?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29c8508024e82ac4208f45766812ead6&auto=format&fit=crop&w=1500&q=100"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ flex: 1 }}>
          <Header
            placement="left"
            leftComponent={
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Ionicons name="ios-menu" size={25} color="#003459" />
              </TouchableOpacity>
            }
            centerComponent={{
              text: "Discover",
              style: {
                fontFamily: "Helvetica",
                fontSize: 20,
                fontWeight: "bold",
                color: "#003459",
                textAlign: "center"
              }
            }}
            backgroundColor="transparent"
            containerStyle={{
              backgroundColor: "00faff",
              justifyContent: "space-around"
            }}
            outerContainerStyles={{ height: 85, borderBottomWidth: 0 }}
            rightComponent={
              <Avatar
                small
                rounded
                source={{ uri: this.props.user.images[0] }}
                //onPress={() => this.goToProfileDetail()}
                activeOpacity={0.7}
              />
            }
          />
          <SwipeCards
            cards={this.props.cards}
            stack={false}
            renderCard={cardData => <Cards {...cardData} />}
            renderNoMoreCards={() => <NoCards />}
            showYup={false}
            showNope={false}
            loop={true}
            handleYup={this.handleYup.bind(this)}
            handleNope={this.handleNope.bind(this)}
            handleMaybe={this.handleMaybe}
            hasMaybeAction={false}
          />
          <TouchableOpacity style={styles.heart}>
            <MaterialCommunityIcons name="heart" size={80} color="red" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.noheart}>
            <MaterialCommunityIcons
              name="heart-broken"
              size={80}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    cards: state.cards,
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);
