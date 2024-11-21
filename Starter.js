import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Starter({ navigation }) {
  const [addedDishes, setAddedDishes] = useState([]); 

  const starters = [
    { id: '1', name: 'BBQ Sticky Wings', description: 'Sweet and smoky BBQ wings', price: 'R110' },
    { id: '2', name: 'Fried Mozzarella', description: 'Golden fried cheese sticks', price: 'R85' },
    { id: '3', name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 'R25' },
  ];

  const addDish = (dish) => {
    setAddedDishes([...addedDishes, dish]);  // Add dish to array
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addDish(item)}  // Add selected dish
      >
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters</Text>

      <FlatList
        data={starters}
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
});
