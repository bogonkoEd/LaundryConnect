import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const DEFAULT_IMAGE = "https://cdn.pixabay.com/photo/2017/01/13/01/22/laundromat-1971930_960_720.jpg";

const LaundromatItem = ({ laundromat }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Laundromat", { id: laundromat.id });
  }
    return (
        <Pressable style={styles.laundromatContainer} onPress={onPress}>
          <Image
            source={{
              uri: laundromat.image_url.startsWith("http") ? laundromat.image_url : DEFAULT_IMAGE,
            }}
            style={styles.image}
          />
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{laundromat.name}</Text>
              <Text style={styles.subtitle}>
                KES {laundromat.deliveryFee.toFixed(2)} &#8226; {laundromat.minDeliveryTime}-
                {laundromat.maxDeliveryTime} minutes
              </Text>
            </View>
    
            <View style={styles.rating}>
              <Text>{laundromat.rating.toFixed(0)}</Text>
            </View>
          </View>
        </Pressable>
    );
};

export default LaundromatItem

const styles = StyleSheet.create({
    laundromatContainer: {
        width: "100%",
        marginVertical: 10,
        backgroundColor: "#cc99ff",
        borderRadius: 10,
        overflow: "hidden",
        padding: 10,

    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "#b266ff",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
})
