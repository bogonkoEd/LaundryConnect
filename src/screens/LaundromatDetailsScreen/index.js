import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import LaundromatItem from "../../components/LaundromatItem";
import laundromats from "../../../assets/data/laundromats.json";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "../../components/ListItem";
import LaundromatHeader from "./LaundromatHeader";
import styles from "./styles";

const laundromat = laundromats[0];
("");

const LaundromatPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={laundromat.services}
        renderItem={({ item }) => <ListItem service={item} />}
        ListHeaderComponent={LaundromatHeader}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="#fff"
          style={styles.iconContainer}
        />
      </View>
    </View>
  );
};


export default LaundromatPage;
