import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EntriesList({children}) {
  return (
    <FlatList>
      {children}
    </FlatList>
  )
}

const styles = StyleSheet.create({})