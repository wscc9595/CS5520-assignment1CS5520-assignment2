import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton'
import { styleObj } from '../style'
import { AntDesign } from '@expo/vector-icons'; 
import Edit from '../screens/Edit'
import { useNavigation } from '@react-navigation/native';


export default function EntriesList({expenses}) {
  const navigation = useNavigation()
  return (
    <FlatList
    data={expenses}
    renderItem={({ item }) => {
      return (
        <PressableButton defaultStyle={styleObj.entryDefault} pressedStyle={styleObj.entryPressed} pressedFunction={()=>{navigation.navigate("Edit")}}>
            <Text style={styleObj.itemTitle}>{item.itemName}</Text>
            <View style={styleObj.signWrapper}>
            {item.overbudget === true && <AntDesign name="warning" size={24} color="#fff" />}
            <View style={styleObj.expenseWrapper}>
           <Text style={styleObj.expenseText}>{`${item.quantity}*${item.unitPrice}`}</Text>
           </View>
           </View>
        </PressableButton>)}}/>
  )
}

const styles = StyleSheet.create({})