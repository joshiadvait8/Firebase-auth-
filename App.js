import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

//import firebase config object from FirebaseConfig file
import { firebaseConfig } from "./FirebaseConfig";

firebase.initializeApp(firebaseConfig);
//sign in | sign up | Home scree | Loadingscreen(vital)

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    Signup: { screen: SignupScreen },
    Signin: { screen: SigninScreen },
    Home: { screen: HomeScreen }
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  }
);

//create app container
const App = createAppContainer(MainNavigator);
export default App;
