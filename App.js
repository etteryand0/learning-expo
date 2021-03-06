import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen.jsx';
import TourScreen from './components/TourScreen.jsx';
import MapScreen from './components/MapScreen.jsx';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tour" component={TourScreen} options={{title:"Туры"}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title:"Карта"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}