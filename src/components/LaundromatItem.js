import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const LaundromatItem = ({ laundromat }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Laundromat", { id: laundromat.id });
  }
    return (
        <Pressable style={styles.laundromatContainer} onPress={onPress}>
          <Image
            source={{
              uri: laundromat.image,
            }}
            style={styles.image}
          />
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{laundromat.name}</Text>
              <Text style={styles.subtitle}>
                KES {laundromat.deliveryFee} &#8226; {laundromat.minDeliveryTime}-
                {laundromat.maxDeliveryTime} minutes
              </Text>
            </View>
    
            <View style={styles.rating}>
              <Text>{laundromat.rating}</Text>
            </View>
          </View>
        </Pressable>
    );
};

export default LaundromatItem

const styles = StyleSheet.create({
    laundromatContainer: {
        width: "100%",
        marginVertical: 10
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
        backgroundColor: "#7f7fff",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
})
