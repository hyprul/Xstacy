<View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        roundAvatar
        avatar={<Image style={{borderRadius:50, height:100, width:100 }} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>}
        title={l.name}
        subtitle={l.subtitle}
      />
    ))
  }
</View>


<ListItem
                  roundAvatar
                  key={idx}
                  avatar={
                    <Image
                      style={{ borderRadius: 5, height: 80, width: 80 }}
                      source={{ uri: uri.user.photoUrl }}
                    />
                  }
                  title={uri.user.name}
                />



                      <TouchableOpacity
        onPress={() => {
          this.nextPhoto();
          console.log("Next Photo");
        }}
      >
        <ImageBackground
          style={styles.card}
          source={{ uri: this.props.images[this.state.num] }}
        >
          <View style={styles.cardDescription}>
            <View style={styles.cardInfo}>
              <Text style={styles.bold}>{this.props.name}</Text>
              <Text>{this.props.aboutMe}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>