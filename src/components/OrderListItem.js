import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({order}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Order", { id: order.id })
      }
    >
      <Image
        source={{ uri: order.Laundromat.image }}
        style={styles.image}
      />

      <View>
        <Text style={styles.laundromatName}>
          {order.Laundromat.name}
        </Text>
        <Text style={styles.details}>3 items &#8226; KES 38.45</Text>
        <Text>2 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
}

export default OrderListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10, 
    alignItems: "center" 
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  laundromatName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  details: {
    fontSize: 16,
    color: "#5d5d5d",
  },
})