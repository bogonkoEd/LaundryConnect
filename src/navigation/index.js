import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LaundromatPage from "../screens/LaundromatDetailsScreen";
import ListItemDetails from "../screens/ListItemScreen";
import BasketPage from "../screens/BasketScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderDetailsScreen from "../screens/OrderDetails";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthCXT } from "../context/AuthCXT";
import { ActivityIndicator } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const LoadingScreen = () => {
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" />
    <Text>Loading...</Text>
  </View>;
};
const RootNavigation = () => {
  const { dbUser, isLoading } = useAuthCXT();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  if (isInitialLoad) {
    return <LoadingScreen />;
  }



  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />

      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#b266ff" }}
      activeColor="black"
      inactiveColor="#e5ccff"
    >
      <Tab.Screen
        name="Baskets"
        component={OrdersStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="local-laundry-service"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-astronaut" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Laundromats"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Laundromat"
        component={LaundromatPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ListItem"
        component={ListItemDetails}
        options={{ headerTitle: "Service" }}
      />
      <HomeStack.Screen name="Basket" component={BasketPage} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Your Baskets" component={OrderScreen} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailsScreen}
        options={{ headerTitle: "Basket" }}
      />
    </OrdersStack.Navigator>
  );
};
export default RootNavigation;
