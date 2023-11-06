import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LaundromatItem from '../../components/LaundromatItem'
import laundromats from '../../../assets/data/laundromats.json';   

export default function HomeScreen() {
    return (
      <View style={styles.page}>
        <FlatList
          data={laundromats}
          renderItem={({ item }) => <LaundromatItem laundromat={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
  });