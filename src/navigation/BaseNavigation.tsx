import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';


const Stack = createNativeStackNavigator();


const BaseNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Home">
    
      <Stack.Screen
        name="Home"
        component={Home}  
         />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default BaseNavigation

const styles = StyleSheet.create({})