import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { useAuthCXT } from "../../context/AuthCXT";
import { User } from "../../models";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const { sub } = useAuthCXT();

  const onSave = async () => {
    if (sub) {
      updateUser();
    } else {
      createUser();
    }
    }

    const createUser = async () => {
      const newUser = await DataStore.save(
        new User({
          sub,
          name,
          address,
          lat,
          lng,
        })
      );
      console.log(newUser);
      Alert.alert("Success", "User created successfully");
    }

    const updateUser = async () => {
      const user = await DataStore.query(User, sub);
      await DataStore.save(
        User.copyOf(user, (updated) => {
          updated.name = name;
          updated.address = address;
          updated.lat = lat;
          updated.lng = lng;
        })
      );
      Alert.alert("Success", "User updated successfully");
  };
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
      <Pressable onPress={onSave} style={styles.button}>
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
    marginTop: 40,
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
