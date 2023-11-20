import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import ListItem from "../../components/ListItem";
import LaundromatHeader from "./LaundromatHeader";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from 'aws-amplify';
import { getLaundromat, serviceItemsByLaundromatID } from '../../graphql/queries';

const LaundromatPage = () => {
  const [laundromat, setLaundromat] = useState(null);
  const [serviceItems, setServiceItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const id = route.params.id;

  useEffect(() => {
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

  return (
    <View style={styles.page}>
      <FlatList
        data={serviceItems}
        renderItem={({ item }) => <ListItem service={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={LaundromatHeader}
      />
    </View>
  );
};

export default LaundromatPage;
