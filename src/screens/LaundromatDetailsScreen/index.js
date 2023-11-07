import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import LaundromatItem from "../../components/LaundromatItem";
import laundromats from "../../../assets/data/laundromats.json";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "../../components/ListItem";
import LaundromatHeader from "./LaundromatHeader";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const laundromat = laundromats[0];
("");

const LaundromatPage = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const id = route.params.id;

  return (
    <View style={styles.page}>
      <FlatList
        data={laundromat.services}
        renderItem={({ item }) => <ListItem service={item} />}
        ListHeaderComponent={LaundromatHeader}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};



export default LaundromatPage;
