import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import {
  uploadImages,
  deleteImage,
  updateAbout,
  logout
} from "../redux/actions";
import { ImagePicker, Permissions } from "expo";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";

import { Header, Avatar, Icon } from "react-native-elements";
import { RkGallery, RkButton, RkTheme } from "react-native-ui-kitten";

class Profile extends React.Component {
  async componentWillMount() {
    let res = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA),
      Permissions.askAsync(Permissions.CAMERA_ROLL)
    ]);
  }

  deleteImage() {
    this.self.props.dispatch(
      deleteImage(this.self.props.user.images, this.key)
    );
  }

  addImage() {
    this.props.dispatch(uploadImages(this.props.user.images));
  }

  galleryArray() {
    return this.props.user.images.map(url => ({ uri: url }));
  }

  galleryImage() {
    return <RkGalleryImage source={{ uri: this.props.user.images[0] }} />;
  }

  renderGalleryHeader = onRequestClose => (
    <View>
      <RkButton onPress={onRequestClose} rkType="accent">
        Back
      </RkButton>
    </View>
  );

  onGridItemClick = (item, index) => {
    // whatever
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1491036775913-3fbc5c455842?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29c8508024e82ac4208f45766812ead6&auto=format&fit=crop&w=1500&q=100"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          placement="left"
          leftComponent={
            <TouchableOpacity>
              <Ionicons name="ios-menu" size={25} color="#003459" />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Profile",
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

        <ScrollView>
          <View style={[styles.container, styles.center]}>
            <Image
              style={styles.avatarimg}
              source={{ uri: this.props.user.images[0] }}
            />
            <Text style={[styles.center, styles.headName, { color: "#fff" }]}>
              {this.props.user.name}
            </Text>
            <View style={styles.imgRow}>
              {this.props.user.images.map((uri, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={this.deleteImage.bind({ self: this, key: key })}
                  >
                    <Image style={styles.img} source={{ uri: uri }} />
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                style={[
                  styles.img,
                  styles.center,
                  { backgroundColor: "transparent" }
                ]}
                onPress={this.addImage.bind(this)}
              >
                <Ionicons name="ios-add" size={75} style={styles.color} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Text style={[styles.bold, { color: "#fff" }]}>About</Text>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={3}
            onChangeText={text => this.props.dispatch(updateAbout(text))}
            value={this.props.user.aboutMe}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => this.props.dispatch(logout())}>
          <Text style={styles.button}>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

let accent = "#ed1c4d";

RkTheme.setType("RkButton", "accent", {
  container: {
    backgroundColor: accent
  },
  content: {
    color: "white"
  }
});

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);
