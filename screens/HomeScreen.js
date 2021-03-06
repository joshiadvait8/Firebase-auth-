import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

//sign in | sign up | Home scree | Loadingscreen(vital)

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  static navigationOptions = {
    title: "Home",
    header: null
  };

  componentDidMount() {
    //listens for all activities happende in firebase  triggres all the time
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        });
      } else {
        this.props.navigation.replace("Signin");
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>Learncodeonline.in</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hey {this.state.name}</Text>
          <Text>You are signed in as : {this.state.email}</Text>
        </View>
        <Button
          full
          rounded
          success
          onPress={() => {
            this.signOutUser();
          }}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {
    padding: 20
  },

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
