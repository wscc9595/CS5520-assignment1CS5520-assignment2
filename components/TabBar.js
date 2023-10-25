import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';

const Tab = createBottomTabNavigator();


export default function TabBar() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="AllExpenses" component={AllExpenses} />
    {/* <Stack.Screen name="OverExpenses" component={OverExpenses}/> */}
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})