import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
//sign in | sign up | Home scree | Loadingscreen(vital)

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  //check before render authentication
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      //authenticate return bool value as this allback function
      if (authenticate) {
        //user is authenticated redirect to homescreen
        //replacce ususaly use to finish the current activity
        this.props.navigation.replace("Home");
      } else {
        //redirect to diffrent screen i.e.signin screen
        this.props.navigation.replace("Signin");
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={30} color="#45CE30" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
