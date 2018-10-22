import React from "react";
import styles from "../styles";
import * as firebase from "firebase";
import { sendNotification } from "../redux/actions";
import { connect } from "react-redux";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { LinearGradient } from "expo";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import { Header, Avatar, Icon } from "react-native-elements";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import emojiUtils from "emoji-utils";
import { Text } from "react-native";

import SlackMessage from "./SlackMessage.js";

class Chat extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    firebase
      .database()
      .ref(
        "cards/" +
          this.props.user.id +
          "/chats/" +
          this.props.navigation.state.params.user.id
      )
      .on("value", snap => {
        var items = [];
        snap.forEach(child => {
          if (child.val().key != "user") {
            item = child.val();
            items.push(item);
          }
        });
        this.setState({ messages: items.reverse() });
      });
  }

  //Custom onSend
  onSend(messages = []) {
    this.props.dispatch(
      sendNotification(
        this.props.navigation.state.params.user.id,
        messages[0].user.name,
        messages[0].text
      )
    );
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    firebase
      .database()
      .ref(
        "cards/" +
          this.props.user.id +
          "/chats/" +
          this.props.navigation.state.params.user.id
      )
      .push(messages[0]);
    firebase
      .database()
      .ref(
        "cards/" +
          this.props.navigation.state.params.user.id +
          "/chats/" +
          this.props.user.id
      )
      .push(messages[0]);
  }

  renderMessage(props) {
    const {
      currentMessage: { text: currText }
    } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === "android" ? 34 : 30
      };
    }

    return <SlackMessage {...props} messageTextStyle={messageTextStyle} />;
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#fff"
          },
          right: {
            backgroundColor: "#9facc9"
          }
        }}
        textStyle={{
          right: {
            color: "#fff",
            fontFamily: "Helvetica-Bold",
            fontSize: 14
          },
          left: {
            color: "#9facc9",
            fontFamily: "Helvetica-Bold",
            fontSize: 14
          }
        }}
      />
    );
  }

  render() {
    return (
      //Background
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
                <Image
                  style={styles.barlogo}
                  source={require("../assets/tinder-logo.png")}
                />
              </TouchableOpacity>
            }
            centerComponent={{
              text: "Engage",
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
            outerContainerStyles={{ height: 100, borderBottomWidth: 0 }}
            rightComponent={
              <Avatar
                medium
                rounded
                source={{ uri: this.props.user.images[0] }}
                //onPress={() => this.goToProfileDetail()}
                activeOpacity={0.7}
              />
            }
          />

          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: this.props.user.id,
              name: this.props.user.name,
              avatar: this.props.user.images[0]
            }}
            renderBubble={this.renderBubble.bind(this)}
          />
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

export default connect(mapStateToProps)(Chat);
