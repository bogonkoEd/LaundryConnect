import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Auth } from "aws-amplify";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const onSave = async () => {};
  return (
    <SafeAreaView style={styles.contain}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Pressable onPress={onSave} style={styles.button} >
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
      <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: "center", color: "red", margin: 10 }}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    marginTop: 40
  },
  input: {
    margin: 10,
    backgroundColor: "#e5ccff",
    padding: 15,
    borderRadius: 5,
  },
  contain: {
    flex: 1,
    backgroundColor: "#bf7fff",
  },
  button: {
    backgroundColor: "#cc99ff",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
});
