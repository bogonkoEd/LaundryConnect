import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import { React, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigation, useRoute } from "@react-navigation/native";
import { getServiceItem } from '../../graphql/queries';

const quantity = 1;

const ListItemDetails = () => {
  const [service, setService] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const {addService} = useBasketCXT();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await API.graphql(graphqlOperation(getServiceItem, { id }));
        setService(serviceData.data.getServiceItem);
      } catch (e) {
        console.error("Error fetching data: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size={"large"} color="green" />;
  }

  const onAdd = async () => {
    await addService(service, quantity);
    navigation.goBack();
  };

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

      <Pressable style={styles.button} onPress={onAdd}>
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
    paddingVertical: 20, // temp fix
    padding: 10,
    backgroundColor: "#bf7fff",
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#525252",
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
    backgroundColor: "#d8b2ff",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
});
