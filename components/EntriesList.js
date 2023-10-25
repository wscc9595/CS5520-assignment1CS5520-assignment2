import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton'
import { styleObj } from '../style'

export default function EntriesList({expenses}) {
  return (
    <FlatList
    data={expenses}
    renderItem={({ item }) => {
      return (
        <PressableButton defaultStyle={styleObj.entryDefault} pressedFunction={styleObj.entryPressed}>
            <Text style={styleObj.itemTitle}>{item.itemName}</Text>
            <View style={styleObj.expenseWrapper}>
           <Text style={styleObj.expenseText}>{`${item.quantity}*${item.unitPrice}`}</Text>
           </View>
        </PressableButton>)}}/>
  )
}

const styles = StyleSheet.create({})