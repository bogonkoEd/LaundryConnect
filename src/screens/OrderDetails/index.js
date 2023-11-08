import { StyleSheet, Text, View , Image, FlatList} from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import laundromats from "../../../assets/data/laundromats.json";
import BasketListItem from "../../components/BasketListItem";

const order = orders[0];
const laundromat = laundromats[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Laundromat.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Laundromat.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &#8226; {order.Laundromat.minDeliveryTime}- {order.Laundromat.maxDeliveryTime} minutes
          </Text>

          <Text style={styles.menuTitle}>Your Laundry Basket</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetailsScreen = () => {
    return (
        <FlatList
        ListHeaderComponent={<OrderDetailsHeader />}
        data={laundromat.services}
        renderItem={({ item }) => <BasketListItem basketItem={item} />}
      />);
    }

export default OrderDetailsScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#bf7fff",
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        color: "#525252",
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7,
    },
    container: {
        margin: 10,
    },
});
