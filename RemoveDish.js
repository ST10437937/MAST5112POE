import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function RemoveDish({ navigation, route }) {
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'BBQ Sticky Wings', type: 'Starter' },
    { id: '2', name: ' Fried Mozzarella', type: 'Starter'},
    { id: '3', name: ' Garlic Bread', type: 'Starter'},
    { id: '1', name: ' Grilled Chicken', type: 'Main'},
    { id: '2', name: ' Beef Burger', type: 'Main'},
    { id: '2', name: ' Seafood Pasta', type: 'Main'},
    { id: '', name: 'Lemon Cheesecake', type: 'Dessert' },
    { id: '', name: 'Chocolate Mousse', type: 'Dessert' },
    { id: '', name: 'Apple Pie', type: 'Dessert' },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemType, setNewItemType] = useState('');

  
  const handleAddItem = () => {
    if (newItemName && newItemType) {
      const newItem = {
        id: Date.now().toString(),
        name: newItemName,
        type: newItemType,
      };
      setMenuItems([...menuItems, newItem]);
      setNewItemName('');
      setNewItemType('');
    }
  };

  
  const handleRemoveItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RemoveDish Management</Text>

      
      {/* Menu Items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - {item.type}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveItem(item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Save and Go Back */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.navigate('MenuScreen', { updatedMenu: menuItems })}
      >
        <Text style={styles.saveButtonText}>Save & Go Back</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
