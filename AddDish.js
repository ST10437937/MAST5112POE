import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function AddDish({ route }) {
  const { dishes } = route.params; 
  const renderDish = ({ item }) => (
    <View style={styles.dishContainer}>
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishDescription}>{item.description}</Text>
      <Text style={styles.dishPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Added Dishes</Text>

      <FlatList
        data={dishes}
        renderItem={renderDish}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dishContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
  },
  dishDescription: {
    fontSize: 14,
    color: '#888',
  },
  dishPrice: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
});

