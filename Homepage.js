import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={{
          uri: 'https://media-private.canva.com/3cM9Y/MAGXAB3cM9Y/1/p.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241119T181736Z&X-Amz-Expires=71066&X-Amz-Signature=d9da17891fdeb986155fe10d3fea5ef6c6de0132b7196a8ee14665788bd457a6&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2020%20Nov%202024%2014%3A02%3A02%20GMT',
        }} 
        style={styles.logo}
      />

      {/* Chef's Name */}
      <Text style={styles.title}>Chef Christofell</Text>

      {/*  Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating to MenuScreen");  
          navigation.navigate('MenuScreen'); // Navigate to MenuScreen
        }}
      >
        <Text style={styles.buttonText}>Tap For Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
