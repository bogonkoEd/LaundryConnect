import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import LaundromatItem from "../components/LaundromatItem";
import laundromats from "../../assets/data/laundromats.json";
import HomeScreen from "../screens/HomeScreen";
import LaundromatPage from "../screens/LaundromatDetailsScreen";
import ListItemDetails from "../screens/ListItemScreen";
import BasketPage from "../screens/BasketScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderDetailsScreen from "../screens/OrderDetails";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
     
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarColor: "white" }}>
      <Tab.Screen
        name="Orders"
        component={OrdersStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
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
        name="Basket"
        component={BasketPage}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Laundromat" component={LaundromatPage} />
      <HomeStack.Screen name="ListItem" component={ListItemDetails} />
      <HomeStack.Screen name="Basket" component={BasketPage} />
    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="OrdersDetail" component={OrderScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  )
}
export default RootNavigation;
