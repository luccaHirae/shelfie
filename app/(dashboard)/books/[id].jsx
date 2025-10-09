import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'

const BookDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView safe style={styles.container}>
      <ThemedText>Book Details - {id}</ThemedText>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  }
})