import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import LaundromatItem from '../../components/LaundromatItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listLaundromats } from '../../graphql/queries';

export default function HomeScreen() {
  const [laundromats, setLaundromats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      console.log(laundromats)
      const response = await API.graphql(graphqlOperation(listLaundromats, {
        filter: {
          _deleted: {
            ne: true,
          }
        }

      }));
      const filteredLaundromats = response.data.listLaundromats.items.filter(item => 
        new Date(item.createdAt) > new Date("2023-11-20T09:19:00.850Z") && !item._deleted
      );
      setLaundromats(filteredLaundromats); // Update local state with new data
    } catch (e) {
      console.error("Error fetching data: ", e);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    fetchData(); // This will fetch and update the data on refresh
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={laundromats}
        renderItem={({ item }) => <LaundromatItem laundromat={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: '#bf7fff',
    paddingTop: 55,
  },
});
