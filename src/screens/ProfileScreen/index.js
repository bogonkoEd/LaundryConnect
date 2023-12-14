import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser, updateUser } from "../../graphql/mutations";
import { useAuthCXT } from "../../context/AuthCXT";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const { sub, setDbUser, dbUser } = useAuthCXT();

  const navigation = useNavigation();

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((authUser) => {
        if (authUser.attributes.sub === dbUser?.sub) {
          // Set the initial profile data from dbUser
          setName(dbUser.name);
          setAddress(dbUser.address);
          setLat(dbUser.lat.toString());
          setLng(dbUser.lng.toString());
        }
      })
      .catch((error) => console.error("Error fetching auth user", error));
  }, [dbUser]);

  const onSave = async () => {
    const latNumber = parseFloat(lat);
    const lngNumber = parseFloat(lng);
    let userInfo;
    try {
      if (dbUser) {
        const input = {
          id: dbUser.id,
          name,
          address,
          lat: latNumber,
          lng: lngNumber,
        };

        if (dbUser.sub === sub) {
          // Update existing user
          userInfo = await API.graphql(
            graphqlOperation(updateUser, {
              input: {
                id: dbUser.id, // Assuming dbUser has an id field
                name,
                address,
                lat: latNumber,
                lng: lngNumber,
              },
            })
          );
        } else {
          // Create new user
          userInfo = await API.graphql(
            graphqlOperation(createUser, {
              input: {
                name,
                address,
                lat: latNumber,
                lng: lngNumber,
              },
            })
          );
        }

        if(userInfo && userInfo.data) {
          setDbUser(userInfo.data.createUser || userInfo.data.updateUser); // Update the dbUser context
          alert("Profile saved successfully!");
        } else {
          console.error("Error saving profile: ", e);
          alert("Failed to save profile.");
        }
      }else{
        console.error("dbUSer is null");
        alert("Failed to save profile.");
      }
    } catch (e) {
      console.error("Error saving profile: ", e);
      alert("Failed to save profile." + e.message);
    }
  }
  
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
