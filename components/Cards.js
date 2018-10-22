import React from "react";
//import styles from "../styles";

import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from "react-native";

class Cards extends React.Component {
  state = {
    num: 0
  };

  nextPhoto() {
    var num = this.state.num;
    var length = this.props.images.length - 1;
    if (num >= length) {
      this.setState({ num: 0 });
    } else {
      num += 1;
      this.setState({ num: num });
    }
  }

  render() {
    return (
      <View style= {{paddingBottom: 100} }>
      <Text style ={styles.text}>{this.props.name}</Text>
      <Text style={styles.nicktext}>{this.props.aboutMe}</Text>
      <TouchableOpacity
        onPress={() => {
          this.nextPhoto();
          console.log("Next Photo");
        }}
      >
       <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.images[this.state.num]}} />
        {/*<Text style={styles.text}>This is card {this.props.name}</Text>*/}
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 5,
    elevation: 1
  },
  thumbnail: {
    width: 300,
    height: 400,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: "#fff",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
    nicktext: {
    fontSize: 20,
    color: "#003459",
    fontFamily: 'Helvetica',
    fontStyle: 'italic', 
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: "center",
    textAlign: "center"
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Cards;
