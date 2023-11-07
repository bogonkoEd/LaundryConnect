import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BasketListItem = ({ basketItem }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>1</Text>
      </View>
      <Text style={styles.titleName}>{basketItem.name}</Text>
      <Text style={styles.price}>KES {basketItem.price.toFixed(2)}</Text>
    </View>
  );
};

export default BasketListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  quantityContainer: {
    backgroundColor: "#e3e3e3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 50,
    borderRadius: 30,
    padding: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: "lightgrey",
    width: "100%",
  },
  titleName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    marginLeft: "auto",
  },
  quantity: {
    marginHorizontal: 15,
    color: "#007eb9",
  },
});
