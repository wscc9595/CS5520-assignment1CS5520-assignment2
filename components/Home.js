import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';
import PressableButton from './PressableButton';
import { styleObj } from '../style';

const Tab = createBottomTabNavigator();


export default function Home({navigation}) {
  return (
    <Tab.Navigator>
    <Tab.Screen name="All Expenses" component={AllExpenses} 
    options={()=>
            ({headerRight: () => (
              <PressableButton
                pressedFunction={() => {
                  navigation.navigate("Add An Expense");
                }}
                pressedStyle={styleObj.pressedStyle}
                defaultStyle={styleObj.defaultStyle}
              >
                <Text>+</Text>
              </PressableButton>)
            })}/>
    {/* <Stack.Screen name="OverExpenses" component={OverExpenses}/> */}
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})