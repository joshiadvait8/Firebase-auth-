import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

const firebaseConfig = {
  apiKey: "AIzaSyD07za5hBoYVROHeNtq8uaMQrfFfZEMiR8",
  authDomain: "reactbootcamp-9c44a.firebaseapp.com",
  databaseURL: "https://reactbootcamp-9c44a.firebaseio.com",
  projectId: "reactbootcamp-9c44a",
  storageBucket: "reactbootcamp-9c44a.appspot.com",
  messagingSenderId: "853141223186",
  appId: "1:853141223186:web:03f2d2e91d183945"
};

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
