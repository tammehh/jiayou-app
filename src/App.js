import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
} from "react-native";
import LoginInput from "./Login";
import Home from "../app/index";
import { auth, db, storage } from "../firebase.js";
import RegisterUser from "./RegisterUser";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={() => Alert.alert("To do register stuff")}
    style={styles.appButtonContainer}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <Home></Home>
      <Text style={styles.welcomeText}>Welcome</Text>
      <LoginInput />
      <Text style={styles.forgotText} > Forgot Password? </Text>
      <AppButton
        title="New? Register here"
        size="sm"
        backgroundColor="#007bff"
      />
      <RegisterUser />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: "20%",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  forgotText: {
    fontSize: 18,
    alignSelf: "center",
    padding: 10,
  },
  welcomeText: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 24,
    padding: 20,
  },
});

export default App;
