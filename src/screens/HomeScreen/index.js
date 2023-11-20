import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import LaundromatItem from '../../components/LaundromatItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listLaundromats } from '../../graphql/queries';

export default function HomeScreen() {
  const [laundromats, setLaundromats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listLaundromats, {
          filter: {
            _deleted: {
              ne: true
            }
          }
        }));
        console.log(response); // Debugging
        setLaundromats(response.data.listLaundromats.items);
      } catch (e) {
        console.error("Error fetching data: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
