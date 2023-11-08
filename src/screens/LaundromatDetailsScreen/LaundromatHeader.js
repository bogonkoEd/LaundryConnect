import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import laundromats from "../../../assets/data/laundromats.json";
const laundromat = laundromats[0];
("");

const LaundromatHeader = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: laundromat.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{laundromat.name}</Text>
        <Text style={styles.subtitle}>
          KES {laundromat.deliveryFee} &#8226; {laundromat.minDeliveryTime}-
          {laundromat.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Services</Text>
      </View>
    </View>
  );
};

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

export default LaundromatHeader;
