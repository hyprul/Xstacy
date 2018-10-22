import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

import { Header, Avatar, Icon } from "react-native-elements";

class Matches extends React.Component {
  state = {
    chats: []
  };

  componentWillMount() {
    firebase
      .database()
      .ref("cards/" + this.props.user.id + "/chats")
      .on("value", snap => {
        var items = [];
        snap.forEach(child => {
          item = child.val();
          items.push(item);
        });
        this.setState({ chats: items.reverse() });
      });
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
        <View style={styles.container}>
          <Header
            placement="left"
            leftComponent={
              <TouchableOpacity>
                <Ionicons name="ios-menu" size={25} color="#003459" />
              </TouchableOpacity>
            }
            centerComponent={{
              text: "Embers",
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
              backgroundColor: "#00faff",
              justifyContent: "space-around"
            }}
            outerContainerStyles={{ height: 85, borderBottomColor: "#fff" }}
          />
          <ScrollView>
            {/*          {this.state.chats.map(uri => {
            return (
              <TouchableOpacity
                style={styles.imgRow}
                onPress={() =>
                  this.props.navigation.navigate("Chat", { user: uri.user })
                }
              >
                <Image style={styles.img} source={{ uri: uri.user.photoUrl }} />
                <Text style={[styles.bold, styles.center]}>
                  {uri.user.name}
                </Text>
              </TouchableOpacity>
            );
          })}*/}

            {this.state.chats.map((uri, idx) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Chat", { user: uri.user })
                  }
                >
                  <ListItem
                    containerStyle={{ borderBottomColor: "#fff" }}
                    roundAvatar
                    key={idx}
                    avatar={
                      <Image
                        style={{ borderRadius: 30, height: 60, width: 60 }}
                        source={{ uri: uri.user.photoUrl }}
                      />
                    }
                    title={
                      <Text
                        style={[
                          {
                            padding: 5,
                            fontSize: 15,
                            color: "#FFFFFF",
                            fontWeight: "bold"
                          },
                          styles.center
                        ]}
                      >
                        {uri.user.name}
                      </Text>
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Matches);
