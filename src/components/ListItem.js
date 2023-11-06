import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import React from "react";

const ListItem = ({ service }) => {
    return (
        <Pressable
          style={styles.container}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{service.name}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {service.description}
            </Text>
            <Text style={styles.price}>KES {service.price}</Text>
          </View>
          {service.image && (
            <Image source={{ uri: service.image }} style={styles.image} />
          )}
        </Pressable>
      );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
