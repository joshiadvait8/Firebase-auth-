import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";

//sign in | sign up | Home scree | Loadingscreen(vital)

//based on loading screen we are moving user to home screen or sign in scren thats why //////loading screen is before Home screen in this app

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  static navigationOptions = {
    title: "SignUp",
    header: null
  };

  signupUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authenticate => {
        return authenticate.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            this.props.navigation.replace("Home");
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>LearnCodeonline.in</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              this.signupUser(
                this.state.name,
                this.state.email,
                this.state.password
              );
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signin");
            }}
          >
            <View style={styles.linkbutton}>
              <Text style={styles.linkbuttonText}>
                Already having account ?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 60
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  },
  linkbutton: {
    backgroundColor: "#45CE30",
    borderRadius: 25,
    padding: 15,
    marginHorizontal: 30,
    marginBottom: 20
  },
  linkbuttonText: {
    color: "#FFF"
  }
});
