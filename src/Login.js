import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { auth, db, storage } from "../firebase.js";

const LoginInput = () => {
  const [un, onChangeUN] = React.useState(null);
  const [pw, onChangePW] = React.useState(null);

  return (
    <SafeAreaView>
      <View style={styles.inputDesc}>
        {/* <Text>Username: </Text> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeUN}
          value={un}
          placeholder="Username here"
        />
      </View>
      <View style={styles.inputDesc}>
        {/* <Text>Password: </Text> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangePW}
          value={pw}
          placeholder="Password here"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputDesc: {
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
    width: 300,
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },

  input: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
  },
});

export default LoginInput;
