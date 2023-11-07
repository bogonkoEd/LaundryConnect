import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      
        <RootNavigation />
        <StatusBar style="light" />
      
    </NavigationContainer>
  );
}



