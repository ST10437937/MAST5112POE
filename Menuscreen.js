import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

export default function MenuScreen({ navigation }) {
  const recommendations = [
    { 
      id: '1', 
      name: 'BBQ Sticky Wings', 
      type: 'Starter', 
      image: 'https://images.pexels.com/photos/27645103/pexels-photo-27645103/free-photo-of-wild-wings-wings-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: '2', 
      name: 'Seafood Pasta', 
      type: 'Main', 
      image: 'https://images.pexels.com/photos/10134737/pexels-photo-10134737.jpeg' 
    },
    { 
      id: '3', 
      name: 'Chocolate Mousse', 
      type: 'Dessert', 
      image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemType}>{item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week's Menu</Text>

      <FlatList
        data={recommendations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Buttons for filters */}
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('Starter')}
      >
        <Text style={styles.menuButtonText}>View Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.menuButtonText}>View Mains</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('Dessert')}
      >
        <Text style={styles.menuButtonText}>View Desserts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('RemoveDish')}  // Navigate to AddDish screen
      >
        <Text style={styles.menuButtonText}>Go to Remove Dish</Text>
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
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemType: {
    fontSize: 14,
    color: '#888',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  categoryButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50', // Green button color
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
});

