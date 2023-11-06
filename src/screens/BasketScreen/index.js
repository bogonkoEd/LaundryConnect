import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { React, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import laundromats from "../../../assets/data/laundromats.json";

const laundromat = laundromats[0];

const BasketPage = () => {
  const getTotals = () => {
    return (laundromat.services.price * quantity).toFixed(2);
  };
  const [quantity, setQuantity] = useState(1);

  const ListItem = ({ basketItem }) => {
    return (
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
        <Text style={styles.name}>{basketItem.name}</Text>
        <Text style={styles.price}>KES {basketItem.price.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{laundromat.name}</Text>
      <Text style={styles.title}>Your Basket</Text>
      <View style={styles.separator} />

      <FlatList
        data={laundromat.services}
        renderItem={({ item }) => <ListItem basketItem={item} />}
      />
      <View style={styles.separator} />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Checkout &#8226; KES {getTotals()}
        </Text>
      </Pressable>
    </View>
  );
};

export default BasketPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    backgroundColor: "#e3e3e3",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderRadius: 3,
    paddingVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  }
});
