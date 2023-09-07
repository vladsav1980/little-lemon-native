import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  Image,
} from "react-native";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.regularText}>
          Subscribe for our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Hello@example.com"
          keyboardType={"email-address"}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    borderColor: "#EE9972",
    backgroundColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 25,
  },
  logo: {
    height: 100,
    width: 300,
  },
});
