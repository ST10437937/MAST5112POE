import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';  
import MenuScreen from './MenuScreen'; 
import Starter from './Starter';  
import Main from './Main';  
import Dessert from './Dessert';  
import RemoveDish from './RemoveDish';  
import AddDish from './AddDish';

//  stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        {/*  navigation screens */}
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Dessert" component={Dessert} />
        <Stack.Screen name="RemoveDish" component={RemoveDish} />
        <Stack.Screen name="AddDish" component={AddDish} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





