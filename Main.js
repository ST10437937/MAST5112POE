import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Main({ navigation }) {
  const [addedDishes, setAddedDishes] = useState([]); 

  const mains = [
    { id: '1', name: 'Seafood Pasta', description: 'Pasta with shrimp and scallops', price: 'R150' },
    { id: '2', name: 'Steak Frites', description: 'Grilled steak with fries', price: 'R200' },
    { id: '3', name: 'Chicken Alfredo', description: 'Creamy pasta with grilled chicken', price: 'R130' },
  ];

  const addDish = (dish) => {
    setAddedDishes([...addedDishes, dish]); // Add dish to array
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addDish(item)} // Add selected dish to addDish screen
      >
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mains</Text>

      <FlatList
        data={mains}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addDishButton}
        onPress={() => navigation.navigate('AddDish', { dishes: addedDishes })} 
      >
        <Text style={styles.buttonText}>Go to Add Dish</Text>
      </TouchableOpacity>
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
  itemContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
  },
  itemPrice: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  addDishButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
});
