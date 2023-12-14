import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import ListItem from "../../components/ListItem";
import LaundromatHeader from "./LaundromatHeader";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from 'aws-amplify';
import { getLaundromat, serviceItemsByLaundromatID } from '../../graphql/queries';
import { useBasketCXT } from "../../context/BasketCXT";

const LaundromatPage = () => {
  const [laundromat, setLaundromat] = useState(null);
  const [serviceItems, setServiceItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;
  console.warn(id)

  const { setLaundromat: setBasketLaundromat } = useBasketCXT();

  useEffect(() => {
    setBasketLaundromat(null);

    const fetchData = async () => {
      try {
        const laundromatData = await API.graphql(graphqlOperation(getLaundromat, { id }));
        setLaundromat(laundromatData.data.getLaundromat);
        const serviceItemsData = await API.graphql(graphqlOperation(serviceItemsByLaundromatID, { laundromatID: id }));
        setServiceItems(serviceItemsData.data.serviceItemsByLaundromatID.items);
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

  useEffect(() => {
    setBasketLaundromat(laundromat);
  }, [laundromat]);

  return (
    <View style={styles.page}>
      <FlatList
        data={serviceItems}
        renderItem={({ item }) => <ListItem service={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <LaundromatHeader laundromat={laundromat} />}
      />
    </View>
  );
};

export default LaundromatPage;
