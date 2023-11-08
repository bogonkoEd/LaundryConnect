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
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "black",
    backgroundColor: "#cc99ff",
  },
  quantityContainer: {
    backgroundColor: "#8000ff",
    justifyContent: "space-between",
    alignItems: "center",
    width: 30,
    borderRadius: 20,
    padding: 5,
  },
  separator: {
    height: 0.8,
    backgroundColor: "black",
    width: "100%",
  },
  titleName: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    flex: 1,
  },
  price: {
    marginLeft: "auto",
  },
  quantity: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
    fontWeight: "400",
    fontSize: 18,

  },
});
