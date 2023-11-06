import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import LaundromatItem from './src/components/LaundromatItem';
import laundromats from './assets/data/laundromats.json';
import HomeScreen from './src/screens/HomeScreen';
import LaundromatPage from './src/screens/LaundromatDetailsScreen';
import ListItemDetails from './src/screens/ListItemScreen';
import BasketPage from './src/screens/BasketScreen';
import OrderScreen from './src/screens/OrderScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <LaundromatPage /> */}
      {/* <ListItemDetails /> */}
      {/* \<BasketPage /> */}
      <OrderScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
