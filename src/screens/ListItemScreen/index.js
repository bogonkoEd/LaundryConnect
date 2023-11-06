import { StyleSheet, Text, View, Pressable } from "react-native";
import { React, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import laundromats from "../../../assets/data/laundromats.json";

const service = laundromats[0].services[0];
const quantity = 1;

const ListItemDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  const getTotals = () => {
    return (service.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={40}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={40}
          color={"black"}
          onPress={onPlus}
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; KES{" "}
          {getTotals()}
        </Text>
      </Pressable>
    </View>
  );
};

export default ListItemDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 30,
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
    justifyContent: "center",
    marginTop: 50,
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
});
