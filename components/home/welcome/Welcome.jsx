import React from 'react'
import styles from './welcome.style'
import { View, Text,TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello, Anicet</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value='' onChange={() => { }} placeholder="What are you looking for ?" placeholderTextColor="#5b647b" />
        </View>
      </View>
      <TouchableOpacity>
        
      </TouchableOpacity>
    </View>
  )
}

export default Welcome